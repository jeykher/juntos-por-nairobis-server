import { Request, Response, NextFunction } from "express";

import Winner from "../models/winner.models";

import DataBroker from "../libs/DataBroker/DataBroker";

import Clicolor from "../utils/colors/Clicolor";

import IResponse from "../interfaces/libs/IResponse";

const WinnerController = {
    getAll: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for getAll service on winner resource...");
        try {
            let winners = await Winner.find();
            let totalWinners: number | string = winners.length;
            Clicolor.successMessage("Database request for getAll service on winner resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "Winner has been obtained successfully",
                data: {
                    totalWinners,
                    winners
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for getAll service on winner resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Winner have not been obtained successfully. Request have been failed!",
                data: error 
            };
            DataBroker.processData(res, data);
        }
    },
    createWinner: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for createWinner service on winner resource...");
        try {
            let response = await Winner.insertMany([{
                eventShow: 1
            }]);
            let totalWinnerCreated = response.length;
            Clicolor.successMessage("Database request for createWinner service on winner resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "Winner has been created successfully",
                data: {
                    totalWinnerCreated,
                    winnerArrayCreated: response
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error: any) {
            Clicolor.errorMessage("Database request for createWinner service on winner resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Winner creation have been failed!",
                data: error 
            };
            DataBroker.processError(res, data);
        }
    },
    update: async (req: Request, res: Response, next: NextFunction): Promise <void> => {
        Clicolor.waitingMessage("Sending request for update service on winner resource...");
        try {
            const { ticketNumber, typeid, numid, gender, firstname, lastname } = req.body;
            let params = {
                ticketNumber,
                typeid,
                numid,
                gender,
                firstname,
                lastname
            }
            let winnerUpdated = await Winner.findOneAndUpdate(
                {
                    eventShow: 1
                },
                params,
                {
                    new: true
                }
            );
            Clicolor.successMessage("Database request for update service on winner resource has been successfull!");
            let data: IResponse = {
                status: 200,
                message: "Winner have been updated successfully",
                data: {
                    winnerUpdated    
                }
            };
            DataBroker.processData(res, data);
        }
        catch(error) {
            Clicolor.errorMessage("Database request for update service on winner resource has failed!");
            console.log(error);
            let data: IResponse = {
                status: 401,
                message: "Updating winner have been failed!",
                data: error 
            };
            DataBroker.processError(res, data); 
        }
    }
};

export default WinnerController;