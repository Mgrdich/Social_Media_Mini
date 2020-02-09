import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware: Array<any> = [thunk];

declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

export const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);