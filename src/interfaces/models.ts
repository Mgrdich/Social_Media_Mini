import {Document} from 'mongoose';
import {IComment, IEducation, IExperience} from "./General";

export interface IUser {
    name: string;
    email: string;
    password: string;
    avatar?: string;
    date?: Date;
}

//Mongoose modal
export interface IDocUser extends Document, IUser {
}


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
export interface IDocProfile extends Document, IProfile {
}


export interface IPost {
    user:IDocUser["_id"];
    text:string;
    name?:string;
    avatar?:string;
    likes?:Array<{user:IDocUser["_id"]}>;
    comments?:Array<IComment>;
    date?:Date;
}

//Mongoose modal

export interface IDocPost extends Document, IPost {

}

