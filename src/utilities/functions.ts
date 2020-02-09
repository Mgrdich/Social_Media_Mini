import {NextFunction} from "express";
import {IError, IValidation} from "../interfaces/General";

const errorThrower = function (errMessage: string, statusCode: number, data?: any) {
    const error = new Error(errMessage);
    error["statusCode"] = statusCode;
    error["data"] = data;
    throw error;
};

const errorCatcher = function (next: NextFunction, err: Error) {
    if (!err["statusCode"]) {
        err["statusCode"] = 500;
    }
    next(err);
};

const errorFormatter = function ({location, msg, param, value, nestedErrors}) { //change this later
    return `${msg}`;
};

export {errorThrower, errorCatcher, errorFormatter};