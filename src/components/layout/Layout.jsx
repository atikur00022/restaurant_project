import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <Header />
                {props.children}
                <Toaster position="bottom-center"/>
            <Footer />
        </>
    );
};

export default Layout;