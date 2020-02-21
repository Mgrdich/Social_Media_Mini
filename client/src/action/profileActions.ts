import {CLEAR_CURRENT_PROFILE, GET_ERRORS, GET_PROFILE, PROFILE_LOADING} from "./types";
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

// Delete Experience
export const deleteExperience:ActionCreator<ThunkAction<void, any, string, AnyAction>> = (id) => (dispatch) => {
    axios
        .delete(`${URL}/profile/experience/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Delete Education
export const deleteEducation:ActionCreator<ThunkAction<void, any, null, AnyAction>> = (id) => (dispatch) => {
    axios
        .delete(`${URL}/api/profile/education/${id}`)
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


export const clearCurrentProfile: ActionCreator<Action> = () => { //outside of react-redux LifeCycle
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};