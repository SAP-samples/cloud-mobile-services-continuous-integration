const exec = require("./exec.js");
const venv = require("./venvPath.js");

const VENV_PATH = "venv";

let cmdInitVenv;
if(process.env.VIRTUAL_ENV) {
    cmdInitVenv = "virtualenv -p python3 " + VENV_PATH;
} else {
    cmdInitVenv = "virtualenv " + VENV_PATH;
}

const cmdPipInstall = venv("pip") + " install -r requirements.txt";

async function run() {
    try {
        await exec(cmdInitVenv);
        await exec(cmdPipInstall);
    } catch(error) {
        console.error(error);
    }
}

run().then(() => {
    console.log("Successfully initialized virtualenv.");
});
