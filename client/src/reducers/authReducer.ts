import {Action} from "redux";

interface IAuthReducer {
    isAuthenticated: boolean;
    user: any;
}

const initalState: IAuthReducer = {
    isAuthenticated: false,
    user: {}
};

export default function (state: IAuthReducer = initalState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}