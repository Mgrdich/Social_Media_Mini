import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

declare global {

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: any;
    }
}

const middleware: Array<any> = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middleware)
));
