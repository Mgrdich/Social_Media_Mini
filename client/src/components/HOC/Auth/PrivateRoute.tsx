import React from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route, RouteComponentProps} from "react-router";

interface IPrivateRoute extends RouteComponentProps {
    component: any;
    allowedRoles?: Array<string>;
}


//Route is Accessible only when your Authenticated and have the permissions
const PrivateRoute: React.FC<IPrivateRoute> = ({component: Component, allowedRoles, ...rest}) => {
    const isAuth = useSelector<any>(state => state.auth.isAuthenticated);
    const role = useSelector<any>(state => state.auth.user.role);

    return (
        <Route {...rest} render={(props) => (isAuth && allowedRoles && allowedRoles.includes(role as string)) ?
            (<Component {...rest}/>) :
            (
                <Redirect to="/login"/>
            )}
        />
    );
};

export default PrivateRoute;