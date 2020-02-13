import {CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING} from "./types";
import {Action, ActionCreator, Dispatch} from "redux";
import axios from "axios";
import {URL} from "../config/config";

export const setProfileLoading: ActionCreator<Action> = () => {
    return {
        type: PROFILE_LOADING
    };
};

export const getCurrentProfile: ActionCreator<void> = () => (dispatch: Dispatch) => {
    dispatch(setProfileLoading());
    console.log(`${URL}/profile`);
    axios.get(`${URL}/profile`).then((res: any) => {
            console.log(res);
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        }
    ).catch((err: any) => {
            dispatch({
                type: GET_PROFILE,
                payload: {
                    errMessage: err.response.data.message
                }
            })
        }
    )
};

export const clearCurrentProfile: ActionCreator<Action> = () => { //outside of react-redux LifeCycle
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};