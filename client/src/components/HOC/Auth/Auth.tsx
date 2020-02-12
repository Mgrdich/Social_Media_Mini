import React from 'react';
import {useSelector} from "react-redux";

interface IIsAuth {
    ElementWithAuth?: React.ReactNode;
    ElementNoAuth?: any;
}

//Technically not an HOC
const Auth: React.FC<IIsAuth> = (props) => {
    const {ElementWithAuth, ElementNoAuth} = props;
    const isAuth = useSelector<any>(state => state.auth.isAuthenticated);
    if (isAuth) {
        if (ElementWithAuth) {
            return (
                ElementWithAuth    //during Authentication is Shown
            );
        } else if (ElementNoAuth) { //during Authentication is Hidden
            return null;
        }
    } else if (ElementNoAuth) {
        return ElementNoAuth; // No Authentication
    } else {
        return null;
    }
};

export default Auth;