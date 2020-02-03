import {Schema} from "mongoose";
import {IDocUser} from "./models";

export interface ImyError extends Error {
    statusCode: number;
    message: string;
    data: any;
}

export interface IEducation {
    school: string;
    degree: string;
    fieldOfStudy: string;
    from: Date;
    to?: Date;
    current?: boolean;
    description?: string;
}

export interface IExperience {
    title: string;
    company: string;
    from: Date;
    to?: Date;
    location?: string;
    current?: boolean;
    description?: string;
}

export interface IValidation {
    [prop: string]: {
        value: string;
        msg: string;
        param: string;
        location: string;
    }
}

export interface IComment {
    user: IDocUser["_id"];
    text: string;
    name?: string;
    avatar?: string;
    date?: Date;
}