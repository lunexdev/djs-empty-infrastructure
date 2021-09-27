const colors = {
    reset: "\x1b[0m",
    bold: (message) => `\x1b[1m${message}\x1b[0m`,
    black: (message) => `\x1b[30m${message}`,
    red: (message) => `\x1b[31m${message}`,
    green: (message) => `\x1b[32m${message}`,
    yellow: (message) => `\x1b[33m${message}`,
    blue: (message) => `\x1b[34m${message}`,
    magenta: (message) => `\x1b[35m${message}`,
    cyan: (message) => `\x1b[36m${message}`,
    white: (message) => `\x1b[37m${message}`,
    crimson: (message) => `\x1b[38m${message}`,
};

module.exports = colors