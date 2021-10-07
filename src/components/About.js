import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import foto1 from "../assets/m.jpg";

import {  Image, Card } from "antd";
const About = () => {
  return (
    <Card className="about-container"style={{marginTop:"-400px",height:"300px",width:"1040px",marginLeft:"250px"}} >
      <h1 className="nav-title-style" style={{textAlign:"center"}}>About FreeMentor</h1>
      <div className="nav-line-style"></div>

      <h4 style={{textAlign:"center",height:"100px",width:"300px",marginLeft:"200px"}}>
        {" "}
        A mentorship is a relationship between two people where the individual with more experience, knowledge, and connections is able to pass along what they have learned to a more junior individual within a certain field. The more senior individual is the mentor, and the more junior individual is the mentee
      </h4>

      <div className="about-grid-style" style={{marginLeft:"600px",marginTop:"-100px"}}>
        <Image.PreviewGroup className="meAbout-style">
          <Image width={300} src={foto1} className="meAbout-style" />
        </Image.PreviewGroup>
        <div style={{ marginRight:"500px" }}>
        
          
        </div>
      </div>

       
    
    </Card>
  );
};

export default About;