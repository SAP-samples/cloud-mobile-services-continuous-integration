const exec = require("./exec.js");
const venv = require("./venvPath.js");

const cmdReuseInit = venv("reuse") + " lint";

async function run() {
    try {
        await exec(cmdReuseInit);
    } catch(error) {
        console.error(error.message);
        console.error(error.stdout);
        process.exit(1);
    }
}

run().then(() => {
    console.log("No issues found.");
});
