import React from 'react';
import {CircularProgress, CircularProgressProps} from "@material-ui/core";

interface ILoader extends CircularProgressProps {
    className?: string;
}

const Loader: React.FC<ILoader> = (props) => {
    const {className, ...rest} = props;

    return (
        <div className={`Loader ${className ? className : ''}`}>
            <CircularProgress {...rest}/>
        </div>
    );
};

export default Loader;