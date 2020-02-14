import React from 'react';
import PrivateRoute from "./components/HOC/Auth/PrivateRoute";
import Dashboard from "./components/dashboard";
import {Redirect, Route, RouteComponentProps, Switch} from "react-router";
import Landing from "./components/Landing";
import PublicRoute from "./components/HOC/Auth/PublicRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Error from "./components/error";
import {withClass} from "./components/HOC/withClass";

const withLoginRegisterClassName = withClass<RouteComponentProps>("loginRegister");
const LoginWithClassName = withLoginRegisterClassName(Login);
const RegisterWithClassName = withLoginRegisterClassName(Register);


const Routes: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>

            <Route exact path="/" component={Landing}/>

            <PublicRoute exact path="/login" component={LoginWithClassName}/>
            <PublicRoute exact path="/register" component={RegisterWithClassName}/>

            <Route exact path="/404" component={Error}/>
            <Redirect to="/404"/>

        </Switch>
    );
};

export default Routes;