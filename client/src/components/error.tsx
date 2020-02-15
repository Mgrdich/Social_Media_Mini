import React from 'react';

interface IError {
    errorNumber: number;
}

const Error: React.FC<IError> = (props) => {
    return (
        <div className="errorPage">
            <h1>Error{props.errorNumber}</h1>
            <p>This Page is Not Found</p>
        </div>
    );
};

export default Error;