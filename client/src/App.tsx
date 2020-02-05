import React from 'react';
import {Route} from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/Landing";
import {ThemeProvider} from '@material-ui/core';
import {theme} from "./Theme";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header/>
                <Route exact path="/" component={Landing}/>
                <Footer/>
                <div className="loginRegister">
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
