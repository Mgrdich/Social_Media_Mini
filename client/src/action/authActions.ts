import {CURRENT_USER} from "./types";
import {setAuthToken} from "../util/functions";
import jwt_decode from "jwt-decode";

export const loginUser = function (userData: any) {
    const {token} = userData.data;
    //creating the token in ls
    localStorage.setItem('token',token);
    //set Token to Auth Header
    setAuthToken(token);
    //decode the token
    const decoded = jwt_decode(token);

    return {
        type: CURRENT_USER,
        payload: decoded
    }
};