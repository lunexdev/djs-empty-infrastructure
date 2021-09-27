const Discord = require("discord.js");
const client = new Discord.Client({ intents: new Discord.Intents(32509) });

const colors = require("./utils/modules/color");
const config = require("./config.json");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

require("./utils/utils.js")(client);
require("fs").readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    if (!props.config) return console.log((colors.red(`[ERROR] ${f.replace(".js", "")} the CommandHandler of the command was not typed properly and could not be loaded!`)))
    else if (!props["config"]["name"]) return console.log((colors.red(`[ERROR] ${f.replace(".js", "")} could not install because the name of the command is not typed`)))
    else if (typeof props["config"]["aliases"] !== "object") return console.log(colors.red(`[ERROR] ${f.replace(".js", "")} could not load because the aliases part of the command was misspelled.`))
    else if (!props["config"]["code"] || typeof props["config"]["code"] !== "function") return console.log(colors.bold(colors.red(`[ERROR] ${f.replace(".js", "")} could not load because the code part of the command was written incorrectly.`)))
    console.log(colors.bold(colors.green(`[SUCCESSFUL] uploded comamnd: ${props.config["name"]}`)));
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });
});

client.login(config.token)
  .then(() => {
    console.log(colors.bold(colors.blue("[READY] bot is ready"), colors.reset))
  })
  .catch(() => {
    console.log(colors.bold(colors.red("[ERROR] an invalid token was provided."), colors.reset))
    return process.exit(0)
  })