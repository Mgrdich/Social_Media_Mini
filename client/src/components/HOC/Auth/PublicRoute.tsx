import React from 'react';
import {RouteComponentProps} from "react-router";

interface IPublicRoute extends RouteComponentProps{
    component:React.Component;
    allowedRoles?: Array<string>;
}


//Route is Accessible only when your not Authenticated Eg -> Login Page
const PublicRoute:React.FC<IPublicRoute> = ({component:Component}) => {
    return (
        <div>
            
        </div>
    );
};

export default PublicRoute;