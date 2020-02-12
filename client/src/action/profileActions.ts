import {CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING} from "./types";
import {Dispatch} from "redux";
import axios from "axios";

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

export const getCurrentProfile = () => (dispatch: Dispatch) => {
    dispatch(setProfileLoading());
    axios.get('/api/profile').then((res: any) =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        ).catch((err: any) =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

export const clearCurrentProfile = () => { //outside of react-redux LifeCycle
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};