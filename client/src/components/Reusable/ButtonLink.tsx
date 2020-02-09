import React from 'react';
import {Button, ButtonProps} from "@material-ui/core";
import {Link} from "react-router-dom";


interface IButtonLink extends ButtonProps {
    to: string;
    children:string;
}

const ButtonLink: React.FC<IButtonLink> = (props) => {
    const {to, children,...ButtonProps} = props;
    return (
        <Link to={props.to}>
            <Button {...ButtonProps}>{children}</Button>
        </Link>
    );
};

export default ButtonLink;