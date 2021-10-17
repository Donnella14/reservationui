import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./index.css";
import Auth from "../services/Auth";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, Input, notification, Select, Row, Col, Button, InputNumber,DatePicker } from 'antd';
const { Option } = Select;



const RegistrationForm = () => {

  const history = useHistory();

  const onFinish = async(values) => {
  console.log('Received values of form: ', values);
  const response= await Auth.signup(values);
  
  console.log("response:" ,response);
  if(!response){
    return notification.error({message:"request failed,Network error"})
  
  }
  if(response.data.status===200){
notification.success({message:response.data.message});
localStorage.setItem("civil_token",response.data.token);
    return history.push("/dashboard")
  }
  else{
return notification.error({message:response.data.message})
  }
    // console.log('Received values of form: ', values);
  };

  return (
   
    <Form 
    name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      scrollToFirstError
    >
  
        <Row>
          <Col md="6">

          <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
         name="firstName"
         label="FirstName"
         style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}

         tooltip="What do you want others to call you?"
         rules={[
           {
             required: true,
             message: 'Please input your firstname!',
             whitespace: true,
           },
         ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="LastName"
          style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your lastName!',
              whitespace: true,
            },
          ]}
        >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
          
        </Form.Item>
      </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item 
        name="email"
        label="E-mail"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
       <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="abcd@gmail.com" />
      
        </Form.Item>
        <Form.Item name= 'nationalId' label="NationalID" >
        <Input />
      </Form.Item>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
       
        <Form.Item
        name="password"
        label="Password"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        rules={[{ required: true, message: 'Please input your password!',max:10  }]}
       
      >
       <Input.Password
        />
      </Form.Item>
     
      <Form.Item name="phone" label="phoneNumber" rules={[{ type: 'number' }]}>
        <InputNumber />
      </Form.Item>
         
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
      <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            
          </Select>
         
        </Form.Item>
       
      <Form.Item name= 'age' label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
        <InputNumber />
      </Form.Item>

        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
    
    <Form.Item
    name="registeredDate"
    label="RegisteredOn"
    style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
    rules={[{ required: true, message: 'Please input your registered time!' }]}
  >
    <DatePicker />
    </Form.Item>
    
    
    <Form.Item
                name="address"
                label="address"
                rules={[
                    {
                        required: true,
                        message: 'Shyiramo amazina yawe neza.',
                    },
                ]}
            >
                <Input
                    placeholder="Eg: Karemera Lucas" />
            </Form.Item>

</Form.Item>
    
     <Form.Item style={{ marginBottom: 0 }}>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        <p className="mt-2">
              Already have account? <Link to="/signin">SignIn</Link>
            </p>
      </Form.Item>
      </Form.Item>
      </Col>
        </Row>
    </Form>
   
  );
};

export default RegistrationForm ;