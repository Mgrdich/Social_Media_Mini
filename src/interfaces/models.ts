import {Document} from 'mongoose';
import exp from "constants";

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
    company?: string;
    website?: string;
    location?: string;
    status?: string;
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
    education?: Array<{
        school: string;
        degree: string;
        fieldOfStudy: string;
        from: Date;
        to?: Date;
        current?: boolean;
        description?: string;
    }>;
    experience?: Array<{
        title: string;
        company: string;
        from: Date;
        to?: Date;
        location?: string;
        current?: boolean;
        description?: string;
    }>;

}

//Mongoose modal
export interface IDocProfile extends Document,IProfile { }