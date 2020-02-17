import {CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING} from "./types";
import {Action, ActionCreator, AnyAction, Dispatch} from "redux";
import axios from "axios";
import {URL} from "../config/config";
import {ThunkAction} from "redux-thunk";

export const setProfileLoading: ActionCreator<Action> = () => {
    return {
        type: PROFILE_LOADING
    };
};

export const getCurrentProfile: ActionCreator<ThunkAction<void, any, null, AnyAction>> = () => (dispatch: Dispatch) => {
    dispatch(setProfileLoading());
    axios.get(`${URL}/profile`).then((res: any) => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        }
    ).catch((err: any) => {
            dispatch({
                type: GET_PROFILE,
                errMessage: err.response.data.message
            })
        }
    )
};

export const clearCurrentProfile: ActionCreator<Action> = () => { //outside of react-redux LifeCycle
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};