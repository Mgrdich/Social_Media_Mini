import React from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./Styles/style.css";
import Landing from "./components/layout/Landing";

const App = () => {
    return (
        <>
            <Header/>
            <Landing/>
            <Footer/>
        </>
    );
};

export default App;
