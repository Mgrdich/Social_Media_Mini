import React from 'react';
import {Redirect, Route, RouteComponentProps} from "react-router";
import {useSelector} from "react-redux";

interface IPublicRoute extends RouteComponentProps {
    component: React.ComponentType;
}


//Route is Accessible only when your not Authenticated Eg -> Login Page
const PublicRoute: React.FC<IPublicRoute> = ({component: Component, ...rest}) => {
    const isAuth = useSelector<any>(state => state.auth.isAuthenticated);

    return (
        <Route {...rest} render={(props) => (isAuth) ?
            (<Component {...rest}/>) :
            (
                <Redirect to="/login"/>
            )}
        />
    );
};

export default PublicRoute;