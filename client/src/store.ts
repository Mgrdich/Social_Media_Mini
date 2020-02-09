import {compose, createStore} from "redux";
import rootReducer from './reducers'

const initialState = {};


declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

export const store = createStore(
    rootReducer,
    initialState,
    compose(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));