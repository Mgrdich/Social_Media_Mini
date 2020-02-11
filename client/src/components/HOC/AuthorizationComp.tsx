import {useSelector} from "react-redux";
import React from "react";


//Check for performance
export function AuthorizationComp<P extends object>(WrappedComponent: React.FC<P>, allowedRoles?: Array<string>):React.FC<P> { //with empty Array only Authntication check
    return function WithAuthorization(props: P) {

        const isAuth = useSelector<any>(state => state.auth.isAuthenticated);
        const role = useSelector<any>(state => state.auth.user.role);

        if (isAuth && allowedRoles && allowedRoles.includes(role as string)) {
            return <WrappedComponent {...props as P}/>
        } else {
            return <></>
        }
    };
}