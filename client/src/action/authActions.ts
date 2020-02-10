import {SET_CURRENT_USER} from "./types";
import {setAuthToken} from "../util/functions";
import jwt_decode from "jwt-decode";


export const setCurrentUser = function (decoded: any) {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
};

export const loginUser = function (userData: any) {
    const {token} = userData.data;
    //creating the token in ls
    localStorage.setItem('token', token); //TODO Replace it with unique shit
    //set Token to Auth Header
    setAuthToken(token);
    //decode the token
    const decoded = jwt_decode(token);

    return setCurrentUser(decoded);
};


export const logOutUser = function () {
    if(localStorage.token) {
        localStorage.removeItem('token');
    }
    setAuthToken();
    return setCurrentUser({});
};
