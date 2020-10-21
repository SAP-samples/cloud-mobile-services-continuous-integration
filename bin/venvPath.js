const {platform} = require("os");
const {join} = require("path");

const binPath = platform() === "win32" ? "venv/Scripts" : "venv/bin";

module.exports = function() {
    return join(binPath, ...arguments);
};
