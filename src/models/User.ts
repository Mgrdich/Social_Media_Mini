import * as mongoose from 'mongoose';
import {Schema} from "mongoose";
import {IDocUser} from "../interfaces/models";

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        default: "slave"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model<IDocUser>('User', userSchema);

export {User};