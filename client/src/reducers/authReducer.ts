import {SET_CURRENT_USER} from "../action/types";
import {isEmpty} from "../util/functions";

interface IAuthReducer {
    isAuthenticated: boolean;
    user: any;
}

const initialState: IAuthReducer = {
    isAuthenticated: false,
    user: {}
};

export default function (state: IAuthReducer = initialState, action: any) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}