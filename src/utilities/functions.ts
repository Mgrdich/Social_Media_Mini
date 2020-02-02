import {NextFunction} from "express";
import {IValidation} from "../interfaces/General";

const errorThrower = function (errMessage: string, statusCode: number,data?:any) {
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
export {errorThrower, errorCatcher};