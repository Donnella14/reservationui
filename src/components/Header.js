import React,{useState,useEffect} from "react";

import {Menu,Modal} from "antd";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import SignIn from "./signin";
const { SubMenu } = Menu;


const Header= ()=>{

const [isModalVisible, setIsModalVisible] = useState(false);
const [token, setToken]=useState(null);
  const [dataFromToken,setDataFromToken]=useState({});
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    const [current, setCurrent]=useState("home");


  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  useEffect(() => {
    setToken( localStorage.getItem("freeMentor_token"));
   
   })
  
    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
        <SignIn/>
        

      </Modal>
        <div className="header-container" style={{background:"chocolate"}}>
        <h1 style={{color:"white",fontWeight:"bolder"}}>CivilMarriageReservation</h1>


   <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{margin:"0px 0px 0px 60%",background:"black"}}>
     <Menu.Item key="home" style={{color:"white"}} >
      Home
     </Menu.Item>
     <Menu.Item key="about" style={{color:"white"}} >
      About Us
     </Menu.Item>
     {  !token?
        (<Menu.Item key="login" onClick={showModal}>
         Login
        </Menu.Item>):
        (<Menu.Item key="logout" onClick={()=>{localStorage.removeItem("freeMentor_token")}}>
        <Link to="/home">Logout</Link>
        
        </Menu.Item>)}
   </Menu>
    </div>
    </>
 )
}

export default Header;