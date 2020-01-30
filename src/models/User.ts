import * as mongoose from 'mongoose';
import {Schema} from "mongoose";
import {IUser} from "../interfaces/models";

const userSchema = new Schema({
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
    date: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);

export {User};