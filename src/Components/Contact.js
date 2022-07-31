import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";

function Contact(){
    let[name,setName] = useState("");
    let[email,setEmail] = useState("");
    let[message,setMessage] = useState("");

    function checkValue(e){
        switch(e.target.id){
            case "name":
                if((e.target.value.length > 5)){
                    document.getElementById("name").style.borderBottomColor = "green";
                }else{
                    document.getElementById("name").style.borderBottomColor = "red";
                }
                setName(e.target.value);
                break;
            case "email":
                let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if((e.target.value+'').match(pattern)){
                    document.getElementById("email").style.borderBottomColor = "green";
                }else{
                    document.getElementById("email").style.borderBottomColor = "red";
                }
                setEmail(e.target.value);
                break;
            case "message":
                if(e.target.value.length > 3){
                    document.getElementById("message").style.borderColor = "green";
                }else{
                    document.getElementById("message").style.borderColor = "red";
                }
                setMessage(e.target.value);
                break;
            default:
                console.log("Exceptional case");
        }
        
    }

    const notify = () => {
        toast("Message send successfully.");
    };

    function handleSubmit(e){
        e.preventDefault();
        notify();
    };

    return(
        <div className="parent">
            <div className="contactuscontainer">
                <div className="toastcontainer">
                    <ToastContainer position="bottom-right" className="Toastify" type="success" />
                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="contactusform">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input id="name" type="text" placeholder="Enter Name" value = {name} required onChange={checkValue}></input>
                        </div>
                        <div>
                            <input id="email" type="email" placeholder="Enter Email" required value = {email} onChange={checkValue}></input>
                        </div>
                        <div>
                            <textarea id="message" placeholder="Enter Message" required value = {message} onChange={checkValue}></textarea>
                        </div>
                        <div>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;