import React from 'react';
import {Route} from "react-router";
import Landing from "./components/Landing";
import {ThemeProvider} from '@material-ui/core'; //TODO check performance
import {theme} from "./Theme";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HeaderFooterLayout from "./components/HOC/HeaderFooterLayout";
import {Provider} from "react-redux";
import {store} from "./store";
import {setCurrentUser} from "./action/authActions";
import {setAuthToken} from "./util/functions";
import jwt_decode from "jwt-decode";

if (localStorage.token) {
    // Set auth token header auth
    setAuthToken(localStorage.token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
}

const App: React.FC = () => {

    return (

        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <HeaderFooterLayout>
                        <Route exact path="/" component={Landing}/>
                    </HeaderFooterLayout>
                    <div className="loginRegister">
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
