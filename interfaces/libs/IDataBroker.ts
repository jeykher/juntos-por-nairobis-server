interface IDataBroker {
    type: string;
    message: string;
    data: any | null;
    error: null | any;
};

export default IDataBroker;
