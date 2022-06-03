import "dotenv/config";

import Server from "./server/Server";

import "./database/mongo/MongoDB";

import CONFIG from "./config/config";

import Clicolor from "./utils/colors/Clicolor";

const server = new Server();

function main() {
    Clicolor.infoMessage(`Using ${CONFIG.general.mode} mode`);
    Clicolor.waitingMessage("Deploying server...");
    server.deploy();
}

main();
