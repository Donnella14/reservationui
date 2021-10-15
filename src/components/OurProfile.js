import React from "react";
import "./index.css";
import { Card, Col, Row,Title,Subtitle,Body } from "antd";
import ReactPlayer from 'react-player/lazy'
import image1 from "../assets/5.jpg";
import image2 from "../assets/7.jpg";
import slide1 from "../assets/q1.jpg";
import slide2 from "../assets/q2.jpg";
import slide4 from "../assets/q3.jpg";
import slide5 from "../assets/q4.jpg";

import slide6 from "../assets/q33.jpg";
import slide7 from "../assets/q24.jpg";
import slide8 from "../assets/q9.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
    slide1,
    slide2,
    slide6,
    slide4,
    slide5,
    slide7,
    slide8

];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const Programs = () => {


    return (
        <>
            <div className="slide-container" style={{ paddingTop: "30px" }}>
                <Slide {...properties}>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }}>

                        <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: "400px", width: "1800px", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})`, height: "400px", width: "1800px", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[3]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[4]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[5]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[6]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>
                    <div className="each-slide" style={{ width: "100%", height: "400px" }} >
                        <div style={{ 'backgroundImage': `url(${slideImages[7]})`, height: "400px", width: "100%", marginLeft: "200px", backgroundRepeat: "no-repeat " }}>

                        </div>
                    </div>

                </Slide>
            </div>
            <div className="profile-container" >
                <Card style={{ width: "100%" }}>
                    <Card.Grid hoverable={false} style={{ width: "100%", display: "flex", padding: "150px", backgroundColor: "#EFEFEF" }}>

                        <div>
                            <span>
                                MarryFromHome Helps couples get legally married from the comfort of their own home, wherever they are in the world.
                                With an online wedding ceremony hosted on Zoom, couples can enjoy an officiated marriage from the US government, regardless of their nationality, sexuality or physical location. Couples then receive a hard-copy of their US marriage certificate which can then be used as a legal document to prove their married status.

                            </span>
                        </div>
                    </Card.Grid>
                </Card>
                <Card style={{ width: "100%", backgroundColor: "#faad14" }}>

                    <Card.Grid hoverable={false} style={{ width: "100%", display: "flex", padding: "250px", backgroundColor: "#" }}>
                        <span style={{ color: "#422510", font: "23px sans-serif", marginTop: "-200px", width:"100%"}}>
                            YOUR LOVE KNOWS NO BOUNDS. NOW YOUR MARRIAGE CAN TOO.
                        </span>
                        <Card style={{ width: '18rem' }}>
  <Card>
    
    <Card.Grid>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Grid>
    
  </Card >
</Card>
                    </Card.Grid>
                    
                

       
</Card>

                <Card style={{ width: "100%" }}>
                    <Card.Grid hoverable={false} style={{ width: "100%", display: "flex", padding: "50px", backgroundColor: "lavenderBlush" }}>
                        <img src={image2} alt="image" width="70%" />
                        <div>
                            <h1 style={{ fontSize: "60px", color: "black", fontWeight: "bold", border: "white" }}> MARRIAGE REGISTRATION </h1>
                            <p style={{ fontSize: "20px", padding: "10px", border: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                        </div>
                    </Card.Grid>
                </Card>
                <Card style={{ width: "100%" }}>
                    <Card.Grid hoverable={false} style={{ width: "40%" }}>
                        <h1 style={{ fontSize: "60px", color: "black", fontWeight: "bold", border: "white" }}> PROCESS AND REQUIREMENTS

                        </h1>
                        <p style={{ fontSize: "20px", padding: "10px", border: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>


                    </Card.Grid>
                    <Card.Grid hoverable={false} style={{ width: "50%" }}>

                        <div className='player-wrapper'>
                            <ReactPlayer
                                className='react-player'
                                url='https://www.youtube.com/watch?v=k1eo4PrJaXc'
                                width='100%'

                            />
                        </div>
                    </Card.Grid>
                </Card>

            </div>
        </>
    )

}

export default Programs;