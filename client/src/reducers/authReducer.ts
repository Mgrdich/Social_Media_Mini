import {TEST_DISPATCH} from "../action/types";

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
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}