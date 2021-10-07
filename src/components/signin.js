import React,{useState} from "react";

import { Form, Input, Button, Checkbox,notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link,useHistory} from "react-router-dom";
import RegistrationForm from "./signup";
//import AuthApi from "../services/Auth";

const SignIn = () => {


  //const history= useHistory();
  //const [isloading,setisloading]= useState(false);

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

  };

  

  return (

    
    <Form style={{ background:"rgba(38, 40, 49, 1)" }}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item 
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your valid email!',
            
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" style={{ background:"black" }}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          style={{ background:"black" }}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        
       
        Or <a href="/signup">register now!</a>
        
      </Form.Item>
    </Form>
    
  );
};
export default SignIn;