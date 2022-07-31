import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


class Layout extends  React.Component{

    render(){
        return(
            <div className="parent">
                <div className="nav" onClick={this.updateclass}>
                    <div className="logo">
                        <img src="../MonumentsImages/logo.png" alt="not found"></img>
                    </div>
                    <Navbar />
                </div>
                <div className="rendercomp">
                    <Outlet />
                </div>
            </div>
        );
    };
    
}

export default Layout;