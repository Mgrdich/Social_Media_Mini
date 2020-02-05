import React from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./Styles/style.css";
import Landing from "./components/layout/Landing";
import { ThemeProvider } from '@material-ui/core';
import {theme} from "./Theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <Landing/>
            <Footer/>
        </ThemeProvider>
    );
};

export default App;
