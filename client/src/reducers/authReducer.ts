import {SET_CURRENT_USER} from "../action/types";
import {isEmpty} from "../util/functions";

interface IAuthReducer {
    isAuthenticated: boolean;
    user: any;
}

const initalState: IAuthReducer = {
    isAuthenticated: false,
    user: {}
};

export default function (state: IAuthReducer = initalState, action: any) {
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