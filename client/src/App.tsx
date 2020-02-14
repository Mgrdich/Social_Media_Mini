import React from 'react';
import {ThemeProvider} from '@material-ui/core'; //TODO check performance
import {theme} from "./Theme";
import {Router} from "react-router-dom";
import HeaderFooterLayout from "./components/HOC/HeaderFooterLayout";
import {Provider} from "react-redux";
import {store} from "./store";
import {logOutUser, setCurrentUser} from "./action/authActions";
import {setAuthToken} from "./util/functions";
import jwt_decode from "jwt-decode";
import {clearCurrentProfile} from "./action/profileActions";
import Routes from "./Routes";
import history from "./util/history";

if (localStorage.token) {
    // Set auth token header auth
    setAuthToken(localStorage.token);
    // Decode token and get user info and exp
    const decoded: any = jwt_decode(localStorage.token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logOutUser());
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}

const App: React.FC = () => {

    return (

        <Provider store={store}>
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    <HeaderFooterLayout>
                        <Routes/>
                    </HeaderFooterLayout>
                </ThemeProvider>
            </Router>
        </Provider>
    );
};

export default App;
