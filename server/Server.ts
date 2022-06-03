import http from "http";

import App from "../app/App";

import Clicolor from "../utils/colors/Clicolor";

const app = new App();

class Server {
    server: any;
    constructor() {
        this.server = http.createServer(app.api);
    }
    public deploy(): void {
        this.server.listen(app.api.get("serverPort"), () => {
            Clicolor.successMessage(`Server deployed on port ${app.api.get("serverPort")}`);
        });
    }
};

export default Server;
