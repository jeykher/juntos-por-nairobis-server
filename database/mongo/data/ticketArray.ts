import ITicketArray from "../../../interfaces/database/data/ITicketArray";

let ticketArray: any = [];

for(let i: number = 1;i<101;i++) {
    let newTicket: ITicketArray = {
        ticketNumber: i
    };
    ticketArray = [
        ...ticketArray,
        newTicket
    ]
}

export default ticketArray;
