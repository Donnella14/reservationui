import React, { useState, useEffect }from "react";
import { Layout, Menu,Modal } from 'antd';
import {Link} from "react-router-dom";
import decode from "../utils/tokenDecorder";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    CaretRightOutlined,
    ContactsOutlined,
    AntDesignOutlined
  } from '@ant-design/icons';
  import 'antd/dist/antd.css';
  import "./index.css";
  import RegistrationForm from "./signup";
  import MyHeader from "./Header";
  const { Header, Sider, Content } = Layout;


const DashboardLayout =({children})=> {

    const [collapsed,setCollapsed] =useState(false);
    const [token, setToken] = useState(null);
    const toggle =()=>{
        setCollapsed(!collapsed);
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

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
    const state = {
      collapsed: false,
    };
  
    const toggleCollapsed = () => {
      this.setState({
        collapsed: !state.collapsed,
      });
    };
    
    useEffect(() => {
      setToken(localStorage.getItem("civil_token"));
  
    })
    return(
    <>
    
      <Modal title="Registration Form" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
<div style={{padding:"30px"}}>
<RegistrationForm/>

</div>
    </Modal>
        <MyHeader/>
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{height:"95vh"}}>
          <div className="logo" />
       
        <h6 style={{color: "#422510", marginTop: -0, fontFamily:"Arial"}}> {!token?(<></>):(<>{decode(token).firstName}&nbsp;&nbsp;{decode(token).lastName} </>)} </h6>
          
          <Menu   mode="inline" defaultSelectedKeys={['1']} className="menu">
          
            <Menu.Item key="1" class="nav-link active" aria-current="page" icon={<UserOutlined />}>
                <Link style={{textDecoration:"none"}} to="/dashboard">   Sector      </Link>
              
            </Menu.Item>
           
            <Menu.Item key="6" icon={<VideoCameraOutlined />}>
                <Link style={{textDecoration:"none"}} to="/appointments">   All Appointments      </Link>
           
            </Menu.Item>
            <Menu.Item key="7" icon={<VideoCameraOutlined />}>
                <Link style={{textDecoration:"none"}} to="/schedulers">   All Scheduler      </Link>
           
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link style={{textDecoration:"none"}}  to="/profile">   Profile      </Link>
            </Menu.Item>
           
            <Menu.Item key="Register" onClick={showModal} icon={<AntDesignOutlined />}> 
         Register
        </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      </>
    )
}

export default DashboardLayout;