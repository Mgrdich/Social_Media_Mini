import React from 'react';
import {Redirect, Route, RouteProps} from "react-router";
import {useSelector} from "react-redux";

interface IPublicRoute extends RouteProps {
    component: React.ComponentType<any>;
}


//Route is Accessible only when your not Authenticated Eg -> Login Page
const PublicRoute: React.FC<IPublicRoute> = ({component: Component, ...rest}) => {
    const isAuth = useSelector<any>(state => state.auth.isAuthenticated);

    return (
        <Route {...rest} render={(props) => (!isAuth) ?
            (<Component {...props}/>) :
            (
                <Redirect to="/404"/>
            )}
        />
    );
};

export default PublicRoute;