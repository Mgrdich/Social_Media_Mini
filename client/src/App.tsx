import React from 'react';
import {Route} from "react-router";
import Landing from "./components/Landing";
import {ThemeProvider} from '@material-ui/core'; //TODO check performance
import {theme} from "./Theme";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import HeaderFooterLayout from "./components/HOC/HeaderFooterLayout";
import {Provider} from "react-redux";
import {store} from "./store";


const App: React.FC = () => {
    return (

        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <HeaderFooterLayout>
                        <Route exact path="/" component={Landing}/>
                    </HeaderFooterLayout>
                    <div className="loginRegister">
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
