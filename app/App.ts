import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";

import CONFIG from "../config/config";

import TicketRoutes from "../routes/ticket.routes";
import WinnerRoutes from "../routes/winner.routes";

class App {
    api: Application;
    constructor() {
        this.api = express();
        this.applySettings();
        this.useMiddlewares();
        this.useRoutes();
    }
    private applySettings(): void {
        this.api.set('serverPort', CONFIG.server.port);
    }
    private useMiddlewares(): void {
        this.api.use(express.urlencoded({
            extended: false
        }));
        this.api.use(express.json());
        this.api.use(morgan('dev'));
        this.api.use(cors());
        this.api.use(compression());
    }
    private useRoutes(): void {
        this.api.use('/ticket', TicketRoutes);
        this.api.use('/winner', WinnerRoutes);
    }
};

export default App;
