import React from "react";

class Signin extends React.Component{

    constructor(){
        super();
        this.state = {
            name : "",
            semail : "",
            spass : "",
            uemail : "",
            upass : "",
            ucpass : ""
        }
    }

    shiftleft = () => {
        let ele = document.getElementById("formcont");
        ele.style.transform = "translateX(-50%)"
    }

    shiftright = () => {
        let ele = document.getElementById("formcont");
        ele.style.transform = "translateX(0%)"
    }

    handlesubmit = (e) => {
        e.preventDefault();
    }

    handlechange = (e) => {
        console.log(e);
        switch(e.target.id){
            case "name":
                if((e.target.value.length > 5) && (e.target.value != "")){
                    document.getElementById("name").style.borderBottomColor = "green";
                }else{
                    document.getElementById("name").style.borderBottomColor = "red";
                }
                this.setState({name : e.target.value});
                break;
            case "semail":
                var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if((e.target.value+'').match(pattern)){
                    document.getElementById("semail").style.borderBottomColor = "green";
                }else{
                    document.getElementById("semail").style.borderBottomColor = "red";
                }
                this.setState({semail : e.target.value});
                break;
            case "uemail":
                var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if((e.target.value+'').match(pattern)){
                    document.getElementById("uemail").style.borderBottomColor = "green";
                }else{
                    document.getElementById("uemail").style.borderBottomColor = "red";
                }
                this.setState({uemail : e.target.value});
                break;
            case "spass":
                if((e.target.value.length > 8)){
                    document.getElementById("spass").style.borderBottomColor = "green";
                }else{
                    document.getElementById("spass").style.borderBottomColor = "red";
                }
                this.setState({spass : e.target.value});
                break;
            case "upass":
                if((e.target.value.length > 8)){
                    document.getElementById("upass").style.borderBottomColor = "green";
                }else{
                    document.getElementById("upass").style.borderBottomColor = "red";
                }
                this.setState({upass : e.target.value});
                break;
            case "ucpass":
                if((e.target.value.length > 8) && (e.target.value == this.state.upass)){
                    document.getElementById("ucpass").style.borderBottomColor = "green";
                }else{
                    document.getElementById("ucpass").style.borderBottomColor = "red";
                }
                this.setState({ucpass : e.target.value});
                break;
            default:
                console.log("Exceptional case");
        }
    }

    render(){
        return(
            <div className="signparent">
                <div className="signimgcont"></div>
                <div className="signformcont">
                    <div className="signimg"></div>
                    <div className="parentformcont">
                        <div className="formcont" id="formcont">
                            <div className="form1">
                                <form>
                                    <div><input type="email" placeholder="Enter Email" id="semail" onChange={this.handlechange} required></input></div>
                                    <div><input type="password" placeholder="Enter Password" id="spass" onChange={this.handlechange} required></input></div>
                                    <div><button onClick={this.handlesubmit}>Sign-In</button></div>
                                    <div><a onClick={this.shiftleft}>New User! Click here</a></div>
                                </form>
                            </div>
                            <div className="form2">
                                <form>
                                    <div><input type="text" placeholder="Enter Name "  id="name" onChange={this.handlechange} required></input></div>
                                    <div><input type="email" placeholder="Enter Email" id="uemail" onChange={this.handlechange} required></input></div>
                                    <div><input type="password" placeholder="Enter Password" id="upass" onChange={this.handlechange} required></input></div>
                                    <div><input type="password" placeholder="Enter Confirm Password" id="ucpass" onChange={this.handlechange} required></input></div>
                                    <div><button onClick={this.handlesubmit}>Sign-up</button></div>
                                    <div><a onClick={this.shiftright}>Existing User! Click here</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;