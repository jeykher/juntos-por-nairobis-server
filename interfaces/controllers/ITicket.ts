interface ITicket {
    ticketNumber?: number;
    typeid: string;
    numid: string;
    gender: string;
    firstname: string;
    lastname: string;
    email: string;
    status: string;
    active?: boolean;
};

export default ITicket;
