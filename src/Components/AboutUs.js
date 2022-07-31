import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonWalkingLuggage,faPlaneDeparture,faCartFlatbedSuitcase,faRoute} from "@fortawesome/free-solid-svg-icons"

class AboutUs extends React.Component{
    render(){
        return(
            <div className="parent">
                <div className="aboutimgdiv">
                    <div><h3>ONLINE TOURS AND TRAVELS</h3></div>
                    <div><h1>WE HELP TRAVELERS</h1></div>
                </div>
                <div className="empty"></div>
                <div className="aboutcardscontainer">
                    <div className="cards">
                        <div className="imgcontainer">
                            <div className="imgdiv">
                                <FontAwesomeIcon icon={faPersonWalkingLuggage} />
                            </div>
                        </div>
                        <div className="textcontent">
                            <div><h2>Travel</h2></div>
                            <div><p>All accomodations provided by us.</p></div>
                        </div>
                    </div>
                    <div className="cards">
                    <div className="imgcontainer">
                            <div className="imgdiv">
                                <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                            </div>
                        </div>
                        <div className="textcontent">
                            <div><h2>AboutUs</h2></div>
                            <div><p>No1 travelling agnets to help you in your trip.</p></div>
                        </div>
                    </div>
                    <div className="cards">
                    <div className="imgcontainer">
                            <div className="imgdiv">
                                <FontAwesomeIcon icon={faPlaneDeparture} />
                            </div>
                        </div>
                        <div className="textcontent">
                            <div><h2>Benefits</h2></div>
                            <div><p>5 days free stay for regular customers.</p></div>
                        </div>
                    </div>
                    <div className="cards">
                    <div className="imgcontainer">
                            <div className="imgdiv">
                                <FontAwesomeIcon icon={faRoute} />
                            </div>
                        </div>
                        <div className="textcontent">
                            <div><h2>Awards</h2></div>
                            <div><p>Top 10 ranked in all over asia travel services.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;