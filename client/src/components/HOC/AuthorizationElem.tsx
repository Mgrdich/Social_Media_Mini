import React from 'react';
import {useSelector} from "react-redux";

interface IAuthorizationElem {
    allowedRoles?:Array<string>;
}

const AuthorizationElem:React.FC<IAuthorizationElem> = (props) => {
    const isAuth = useSelector<any>(state => state.auth.isAuthenticated);
    const role = useSelector<any>(state => state.auth.user.role);

    return (
        <div>

        </div>
    );
};

export default AuthorizationElem;