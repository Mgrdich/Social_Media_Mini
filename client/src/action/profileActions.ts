import {CLEAR_CURRENT_PROFILE, GET_ERRORS, GET_PROFILE, GET_PROFILES, PROFILE_LOADING, SET_CURRENT_USER} from "./types";
import {Action, ActionCreator, AnyAction, Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
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
export const deleteExperience: ActionCreator<ThunkAction<void, any, null, AnyAction>> = (id) => (dispatch) => {
    axios
        .delete(`${URL}/profile/experience/${id}`)
        .then((res: AxiosResponse) => {
                dispatch(setProfileLoading());
                return axios.get(`${URL}/profile`)
            }
        ).then((res: AxiosResponse) => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    })
        .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                })
            }
        );
};

// Delete Education
export const deleteEducation: ActionCreator<ThunkAction<void, any, null, AnyAction>> = (id) => (dispatch) => {
    axios
        .delete(`${URL}/profile/education/${id}`)
        .then((res: AxiosResponse) => {
                dispatch(setProfileLoading());
                return axios.get(`${URL}/profile`)
            }
        ).then((res: AxiosResponse) => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    }).catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );
};

// Delete account & profile
export const deleteAccount: ActionCreator<ThunkAction<void, any, null, AnyAction>> = () => (dispatch) => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/profile')
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            ).catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                })
            }
        );
    }
};

export const getProfiles: ActionCreator<ThunkAction<void, any, null, AnyAction>> = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/profile/all')
        .then(res =>
                dispatch({
                type: GET_PROFILES,
                payload: res.data
            })
        ).catch(err =>
            dispatch({
                type: GET_PROFILES,
                payload: null
            })
        );
};


export const clearCurrentProfile: ActionCreator<Action> = () => { //outside of react-redux LifeCycle
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};