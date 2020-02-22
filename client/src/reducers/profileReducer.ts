import {CLEAR_CURRENT_PROFILE, GET_PROFILE, GET_PROFILES, PROFILE_LOADING} from "../action/types";

export interface IProfileReducer {
    profile: any;
    profiles: Array<any>;
    loading: boolean;
    errMessage: string;
}

const initialState: IProfileReducer = {
    profile: {},
    profiles: [],
    loading: false,
    errMessage: ''
};

export default function (state: IProfileReducer = initialState, action: any) {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: (action.payload) ? action.payload : {},
                loading: false,
                errMessage: action.errMessage
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: action.payload,
                loading: false
            };
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
}