import ClassHeader from "./components/ClassHeader"
import Header from "./Components/Header";
 import { Header1 } from "./Components/Header"
 import Footer from "./components/footer/Footer";
 import React from "react";
 import Home from "./components/Home";
import PageTitle from "./components/PageTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    return (
        //old one
        // <React.Fragment>
        // <Header/>
        // <Footer/>
        // </React.Fragment>
        //latest one 
        <>
        <Header/>
        <Home/>
        {/* <PageTitle title="welcome home !!!"/> */}
        <Footer/>
        </>
    // { <ClassHeader/> }
    // {//<Header1/> }
    )
}

export default App
