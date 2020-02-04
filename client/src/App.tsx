import React from 'react';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./Styles/style.css";

const App = () => {
  return (
    <>
        <div id="container">
            <Header/>
            <Footer/>
        </div>
    </>
  );
};

export default App;
