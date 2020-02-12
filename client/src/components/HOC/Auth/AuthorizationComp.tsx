import {useSelector} from "react-redux";
import React from "react";


//Check for performance
//TODO make it curry roles as a first parameter
export function Authorization<P extends object>(allowedRoles?: Array<string>) { //with empty Array only Authntication check
    return function (WrappedComponent: React.FC<P>): React.FC<P> {
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
}