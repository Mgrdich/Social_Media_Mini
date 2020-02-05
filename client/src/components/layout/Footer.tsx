import React from 'react';

const Footer:React.FC = () => {
    return(
        <footer className="footer">
            Copyright &copy; {new Date().getFullYear()} DevConnector
        </footer>
    )
};

export default Footer;