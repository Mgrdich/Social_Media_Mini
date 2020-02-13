import React from 'react';
import {Switch} from "react-router";
import Landing from "./components/Landing";
import {ThemeProvider} from '@material-ui/core'; //TODO check performance
import {theme} from "./Theme";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HeaderFooterLayout from "./components/HOC/HeaderFooterLayout";
import {Provider} from "react-redux";
import {store} from "./store";
import {logOutUser, setCurrentUser} from "./action/authActions";
import {setAuthToken} from "./util/functions";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/dashboard";
import {clearCurrentProfile} from "./action/profileActions";
import PublicRoute from "./components/HOC/Auth/PublicRoute";
import PrivateRoute from "./components/HOC/Auth/PrivateRoute";

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
            <BrowserRouter>
                <ThemeProvider theme={theme}>

                    <Switch>
                    <HeaderFooterLayout>
                        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                    </HeaderFooterLayout>
                    </Switch>

                    <Switch>
                        <PublicRoute exact path="/" component={Landing}/>

                        <div className="loginRegister">
                            <PublicRoute exact path="/login" component={Login}/>
                            <PublicRoute exact path="/register" component={Register}/>
                        </div>

                    </Switch>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
