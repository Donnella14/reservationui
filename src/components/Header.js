import React,{useState,useEffect} from "react";

import {Menu,Modal,Input} from "antd";

import "./index.css";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import decode from "../utils/tokenDecorder";
import SigninForm from "./SigninForm";
import logo from "../assets/dove.png";
import { UnorderedListOutlined,AudioOutlined,AntDesignOutlined,ContactsOutlined, HomeOutlined, LoginOutlined} from '@ant-design/icons';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blue100 } from "material-ui/styles/colors";


const { Search } = Input;

const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#15395b',
      }}
    />
  );
  
const Header = ()=>{

    const onSearch = value => console.log(value);

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
    setToken( localStorage.getItem("civil_token"));
   
   })
    return(
      <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px" }}>
<SigninForm/>

</div>
    </Modal>
   <div style={{background:"#CD853F"}}>
        
        <div style={{display:"flex"}}>
        <div>
        <img src={logo} alt="logo" />
          </div>
          
          <div className="social-container" style={{paddingLeft:"40px",paddingTop:"30px"}} >
          <a href="https://www.youtube.com/c/jamesqquick"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.facebook.com/learnbuildteach/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.instagram.com/learnbuildteach"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
      </div>
      </div>
      <p style={{color: "#15395b", marginLeft: 300, marginTop: -50}}> {!token?(<></>):(<>{decode(token).email} </>)} </p>
       
     
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{marginLeft: 450,marginTop: -40, background:"#CD853F"}}>
        <Menu.Item key="home" icon={<HomeOutlined />} >
   
        <Link to="/">
         Home</Link>
        </Menu.Item>
        <Menu.Item key="sectors" icon={ <UnorderedListOutlined />} >
          <Link onClick={handleClick} to="/allsectors">
         Available Sectors </Link>
        </Menu.Item>
        
        <Menu.Item key="dashboard"  icon={<AntDesignOutlined />}>

        <Link onClick={handleClick}  to="/dashboard"  >
         Dashboard</Link>
        </Menu.Item>

        {  !token?
        (<Menu.Item key="login" onClick={showModal} icon={<LoginOutlined />}>
         Login
        </Menu.Item>):
        (<Menu.Item key="logout" onClick={()=>{localStorage.removeItem("civil_token")}}>
        <Link to="/home">Logout</Link>
        
        </Menu.Item>)}
      </Menu>
      </div>
       </>
    )
}

export default Header;