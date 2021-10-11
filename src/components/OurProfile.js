import React from "react";
import "./index.css";


import {Card} from "antd";



import ReactPlayer from 'react-player/lazy'
import image1 from "../assets/5.jpg";
import image2 from "../assets/7.jpg";

const Programs =()=>{

    
    return(
        <div className="profile-container" >
        <Card  style={{width:"100%"}}>
            <Card.Grid className="ess" hoverable={false}  style={{width:"100%",padding:"100px 30px 30px 30px",border:"solid 2px white",display:"flex"}}>
                <div >

                <h1 style={{fontSize:"70px",color:"black", fontWeight:"bold",border:"white"}}> CIVIL MARRIAGE </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"solid 2px white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
           
               
                </div>
                <div>

    <img src={image1} alt="image" width="100%"/>
                </div>
            </Card.Grid>
        </Card>
        <Card style={{width:"100%"}}>
            <Card.Grid hoverable={false}  style={{width:"100%",display:"flex",padding:"50px",backgroundColor:"lavenderBlush"}}>
                <img src={image2} alt="image" width="70%"/>
           <div>
                <h1 style={{fontSize:"60px",color:"black", fontWeight:"bold",border:"white"}}> MARRIAGE REGISTRATION </h1>
                <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
                </div>
            </Card.Grid>
        </Card>
        <Card style={{width:"100%"}}>
                <Card.Grid hoverable={false}  style={{width:"40%"}}>
                    <h1 style={{fontSize:"60px",color:"black", fontWeight:"bold",border:"white"}}> PROCESS AND REQUIREMENTS

</h1>
                    <p style={{fontSize:"20px",padding:"10px",border:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus, vel sollicitudin pulvinar. Porttitor lobortis arcu interdum neque enim.</p>
               
                   
                </Card.Grid>
                <Card.Grid hoverable={false} style={{width:"50%"}}>
                
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
    )
}

export default Programs;