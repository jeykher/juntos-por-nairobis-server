import { Response } from "express";

import IDataBroker from "../../interfaces/libs/IDataBroker";

class DataBroker {
    public processData(res: Response, data: any): Response {
        let response: IDataBroker = {
            type: "DataResponse",
            message: data.message,
            data: data,
            error: null
        };
        return res.status(data.status).json(response);
    }
    public processError(res: Response, data: any): Response {
        let response: IDataBroker = {
            type: "ErrorResponse",
            message: data.message,
            data: null,
            error: data.data
        };
        return res.status(data.status).json(response);
    }
};

const dataBroker = new DataBroker();

export default dataBroker;
