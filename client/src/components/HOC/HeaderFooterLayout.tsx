import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface IHeaderFooterLayout {
    children: React.ReactNode;
}

const HeaderFooterLayout: React.FC<IHeaderFooterLayout> = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default HeaderFooterLayout;