import {CURRENT_USER} from "../action/types";
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
    console.log(action);
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}