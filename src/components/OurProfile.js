import React from "react";
import "./index.css";

import {Card,Input,Avatar} from "antd";
import { AudioOutlined,EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';



import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";




const { Meta } = Card;


const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: 'blue',
      }}
    />
  );


const Programs = ()=>{
    const onSearch = value => console.log(value);

    return(
        <div className="profile-container">
    
        <Card style={{width:"100%"}}>
            
        <Card.Grid hoverable={true}  style={{width:"100%",background:"white",padding:"100px 30px 30px 0px",border:"solid 2px white",display:"flex"}}>
            <img src={image1} alt="image" width="100%"/>
            <div>
                <h1 style={{fontSize:"60px",color:"white", fontWeight:"bold",border:"white"}}> Our Program </h1>
                <p style={{fontSize:"20px",padding:"10px",color:"white",border:"solid 2px white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
            <Search
         placeholder="Search mentor"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
     style={{color:"black",width:"60%"}}
    />
    </div>
            
  
                </Card.Grid>
        </Card>
        <Card style={{width:"100%"}}>
            <Card.Grid hoverable={false} style={{width:"100%",background:"chocolate",padding:"100px 30px 30px 30px",display:"flex"}}>
            <div>
                <h1 style={{fontSize:"60px",color:"white", fontWeight:"bold",border:"white"}}> Scheduler your Session </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"white",color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                </div>  
              
              <img src={image2} alt="image" width="35%"/>
              
            </Card.Grid>
        </Card>

        <Card style={{width:"100%"}}>
           
            <Card.Grid hoverable={false} style={{width:"100%",background:"crgb(139,69,19)"}}>
                <h1 style={{fontSize:"60px",color:"white", fontWeight:"bold",border:"white"}}> Scheduler your Session </h1>
                <p style={{fontSize:"20px",padding:"10px",color:"white",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                <img src={image2} alt="image" width="35%"/>
            </Card.Grid>
        </Card>

  
        </div>
    )
}

export default Programs;