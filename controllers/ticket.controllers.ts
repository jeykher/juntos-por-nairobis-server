import { Request, Response, NextFunction } from "express";

import Ticket from "../models/ticket.models";

import ticketArray from "../database/mongo/data/ticketArray";

import DataBroker from "../libs/DataBroker/DataBroker";

import Clicolor from "../utils/colors/Clicolor";

import ITicket from "../interfaces/controllers/ITicket";
import IResponse from "../interfaces/libs/IResponse";

const TicketController = {
    getAll: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for getAll service on ticket resource...");
        try {
            let tickets: Array<ITicket> = await Ticket.find().sort({
                ticketNumber: 'asc'
            });
            let totalTickets: number | string = tickets.length;
            Clicolor.successMessage("Database request for getAll service on ticket resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "All tickets have been obtained successfully",
                data: {
                    totalTickets,
                    tickets
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for getAll service on ticket resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "All tickets have not been obtained successfully. Request have been failed!",
                data: error 
            };
            DataBroker.processData(res, data);
        }
    },
    getOneById: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        try {
            Clicolor.successMessage("Database request for getOneById service on ticket resource has been successfull!");
            const { id } = req.body;
            let ticket = await Ticket.findById(id).exec();
            let data: IResponse = {
                status: 200,
                message: "Ticket have been obtained successfully",
                data: {
                    ticket
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for getOneById service on ticket resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Ticket by id service has been failed!",
                data: error 
            };
            DataBroker.processError(res, data);
        }     
    },
    getOneByNumber: async (req: Request, res: Response, next: NextFunction) => {
        try {
            Clicolor.successMessage("Database request for getOneByNumber service on ticket resource has been successfull!");
            const { ticketNumber } = req.body;
            let ticket = await Ticket.findOne({
                ticketNumber
            });
            let data: IResponse = {
                status: 200,
                message: "Ticket have been obtained successfully",
                data: {
                    ticket
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for getOneByNumber service on ticket resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Ticket by number service has been failed!",
                data: error 
            };
            DataBroker.processError(res, data);
        }
    },
    createLottery: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for createLottery service on ticket resource...");
        try {
            let response = await Ticket.insertMany(ticketArray);
            let totalTicketCreated = response.length;
            Clicolor.successMessage("Database request for createLottery service on ticket resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "Lottery template have been created successfully",
                data: {
                    totalTicketCreated,
                    ticketArrayCreated: response
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error: any) {
            Clicolor.errorMessage("Database request for createLottery service on ticket resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Lottery template creation have been failed!",
                data: error 
            };
            DataBroker.processError(res, data);
        }
    },
    create: (req: Request, res: Response, next: NextFunction): Response => {
        return res.status(200).json({
            message: "You have used create service from ticket resource."
        });
    },
    update: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for update service on ticket resource...");
        try {
            const { id, typeid, numid, gender, firstname, lastname, email, status, active } = req.body;
            let params: ITicket = {
                typeid,
                numid,
                gender,
                firstname,
                lastname,
                email,
                status,
                active
            }
            let ticketUpdated: ITicket | null = await Ticket.findByIdAndUpdate(
                id,
                params,
                {
                    new: true
                }
            );
            Clicolor.successMessage("Database request for createLottery service on ticket resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "Lottery template have been created successfully",
                data: {
                    ticketUpdated    
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for update service on ticket resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Updating ticket have been failed!",
                data: error 
            };
            DataBroker.processError(res, data); 
        }
    },
    changeState: (req: Request, res: Response, next: NextFunction): Response => {
        return res.status(200).json({
            message: "You have used changeState service from ticket resource."
        });
    },
    delete: (req: Request, res: Response, next: NextFunction): Response => {
        return res.status(200).json({
            message: "You have used delete service from ticket resource."
        });
    }
};

export default TicketController;