import React, { useState, useEffect } from "react";

import { Menu, Modal, Input } from "antd";

import "./index.css";
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import decode from "../utils/tokenDecorder";
import SigninForm from "./SigninForm";
import RegistrationForm from "./signup";
import { HomeOutlined, ContactsOutlined, LoginOutlined } from '@ant-design/icons';

const Header = () => {

  const onSearch = value => console.log(value);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [token, setToken] = useState(null);
  const [dataFromToken, setDataFromToken] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [current, setCurrent] = useState("home");


  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  useEffect(() => {
    setToken(localStorage.getItem("civil_token"));

  })
  return (



    <>
      <Modal title="User Login" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div style={{ padding: "30px" }}>
          <SigninForm />

        </div>
      </Modal>

      <nav class="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#20c997" }}>

        <div class="container-fluid">

          <img width="200" src="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/04/LOGO3-2.png" class="attachment-full size-full lazyloaded" alt="" sizes="(max-width: 2000px) 100vw, 2000px" srcset="https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/04/LOGO3-2.png 2000w, https://i0.wp.com/marryfromhome.com/wp-content/uploads/2021/04/LOGO3-2-600x91.png 600w" data-ll-status="loaded"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {!token ? (<></>) : (<div class="dropdown text-end">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
              </a>
              <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">

                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>)}&nbsp;&nbsp;
            <h6 style={{ color: "white", marginTop: -0, fontFamily: "Arial" }}> {!token ? (<></>) : (<>{decode(token).firstName}&nbsp;&nbsp;{decode(token).lastName} </>)} </h6>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
              <li class="nav-item" onClick={handleClick} selectedKeys={[current]}>
                {/* <a  aria-current="page" href="/">Home</a> */}
                <Link to="/" class="nav-link active " style={{ color: "white" }} >HOME</Link>
              </li>

              <li key="5" class="nav-item ">

                <Link class="nav-link " style={{ textDecoration: "none", color: "white" }} onClick={handleClick} to="/about">ABOUTUS</Link>
              </li>

              <li key="4" class="nav-item ">

                <Link class="nav-link " style={{ textDecoration: "none", color: "white" }} onClick={handleClick} to="/contact">CONTACTUS</Link>
              </li>
              {!token ?
                (<li key="login" class="nav-item " style={{ textDecoration: "none", color: "white" }} onClick={showModal}>
                  <Link class="nav-link " style={{ textDecoration: "none", color: "white" }} onClick={handleClick}> SIGNIN</Link>

                </li>) :
                (<li key="logout" class="nav-link " style={{ textDecoration: "none", color: "white" }} onClick={() => { localStorage.removeItem("civil_token") }}>
                  <Link style={{ textDecoration: "none" }} to="/home">SIGNOUT</Link>

                </li>)}


              <li class="nav-item" >
                <Link to="/home" class="nav-link" style={{ textDecoration: "none", color: "white" }}>REGISTER</Link>
              </li>

            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>


      </nav>

    </>
  )
}

export default Header;