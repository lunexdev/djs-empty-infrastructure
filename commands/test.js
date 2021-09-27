module.exports.config = {
    name: "test",
    aliases: ["testing"],
    code: async (client, message, args) => {
        message.channel.send("test!")
    }
}