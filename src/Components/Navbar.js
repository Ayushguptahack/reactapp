import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    function updateclass(e){
        if(e.target == e.currentTarget){
            return;
        }
        let prev = document.querySelector(".selected");
        if(prev != null){
            prev.classList.remove("selected");
            prev.style.color = "white";
        }
        
        let cur = document.getElementById(e.target.id);
        cur.setAttribute('class','selected');
        cur.style.color = "rgb(253, 158, 34)";
    }

    return(
        <div className="links" onClick={updateclass}>
            <div><Link to="/" id="home" className="selected">Home</Link></div>
            <div><Link to="/gallery" id="gallery">Gallery</Link></div>
            <div><Link to="/aboutus" id="aboutus">About Us</Link></div>
            <div><Link to="/contact" id="contact">Contact Us</Link></div>
        </div>
    );
}

export default Navbar;