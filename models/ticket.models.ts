import { Schema, model } from "mongoose";

import ITicketModel from "../interfaces/models/ITicketModel";

const TicketSchema = new Schema<ITicketModel>({
    ticketNumber: {
        type: Number,
        min: 1,
        max: 100,
        minlength: 1,
        maxlength: 3,
        required: true,
        unique: true
    },
    typeid: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 1
    },
    numid: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: /[a-z0-9!#$%&´*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&´*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    status: {
        type: String,
        trim: true,
        lowercase: true,
        default: 'available',
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model<ITicketModel>("Ticket", TicketSchema);
