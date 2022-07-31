import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{

name =["India Gate","Lotus Temple","Taj Mahal","Golden Temple","Hawa Mahal"];
  images = ["../MonumentsImages/inidagate.jpg","../MonumentsImages/lotus.webp","../MonumentsImages/tajmahal.jpg","../MonumentsImages/goldentemple.webp","../MonumentsImages/hawamahal.webp"]
  constructor(){
    super();
    this.state ={
      idx : 0
    }
  }

  removeclass(){
    let ele = document.querySelector(".selected");
    if(ele != null){
      ele.classList.remove("selected");
      ele.style.color = "white";
    }
  }

  componentDidMount(){
    this.id = setInterval(() => this.setState({
      idx : (this.state.idx + 1) % this.images.length
    }),5000);

    
  }

  componentWillUnmount(){
    clearInterval(this.id);
  }

    render(){
        return(
            <div className="content" style={{
                backgroundImage : `url(${this.images[this.state.idx]})`,
                backgroundPosition : 'center',
                backgroundRepeat : 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className="shadow"></div>
                <div className="titles">
                    <div className="heading">
                        <h2>"Welcome to India"</h2>
                    </div>
                    <div className="titlerender">
                      <div>
                        <h1>DO COME  AND  VISIT "{this.name[this.state.idx].toUpperCase()}"</h1>
                      </div>
                      <div>
                        <h2>"Inida once is not enough"</h2>
                      </div>
                    </div>
                    <div>
                        <Link className="submitbtn" to="/login" onClick={this.removeclass}>SignIn/SignUp</Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;