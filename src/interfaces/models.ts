import {Document} from 'mongoose';
import exp from "constants";
import {IEducation, IExperience} from "./General";

export interface IUser {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    date?: Date;
}

//Mongoose modal
export interface IDocUser  extends Document,IUser  { }


export interface IProfile {
    user: IDocUser["_id"];
    handle: string;
    skills: Array<string>;
    status: string;
    company?: string;
    website?: string;
    location?: string;
    bio?: string;
    githubUserName?: string;
    date?: Date;
    social?: {
        youtube?: string;
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        instagram?: string;
    }
    education?: Array<IEducation>;
    experience?: Array<IExperience>;
}

//Mongoose modal
export interface IDocProfile extends Document,IProfile { }