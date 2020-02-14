import {SET_CURRENT_USER} from "./types";
import {setAuthToken} from "../util/functions";
import jwt_decode from "jwt-decode";
import {Action, ActionCreator, AnyAction, Dispatch} from 'redux';
import {ThunkAction} from "redux-thunk";


export const setCurrentUser: ActionCreator<Action> = function (decoded: any) {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};


export const loginUser: ActionCreator<ThunkAction<void, any, any, AnyAction>> = (userData: any) => (dispatch: Dispatch) => {
    const {token} = userData.data;
    //creating the token in ls
    localStorage.setItem('token', token); //TODO Replace it with unique shit
    //set Token to Auth Header
    setAuthToken(token);
    //decode the token
    const decoded = jwt_decode(token);
    console.log(decoded);
    dispatch(setCurrentUser(decoded));
};


export const logOutUser: ActionCreator<any> = () => (dispatch: Dispatch) => {

    if (localStorage.token) {
        localStorage.removeItem('token');
    }
    setAuthToken();
    dispatch(setCurrentUser({}));
};
