import React,{useState, useEffect } from 'react';
import AuthApi from "../services/Auth"; 
import { Form, Modal, Input, Table, Button, Select, DatePicker,Row,Col,notification} from 'antd';
import {useHistory} from "react-router-dom";
 
  import SessionApi from '../services/Session';


const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}
  
 
  

const Session =()=>{
  const [sectors,setSectors]=useState([]);
  const history = useHistory();

  const onFinish = async(values) => {
  const response= await SessionApi.createsession(values);
  console.log("response:" ,response);
  if(!response){
    return notification.error({message:"request failed,Network error"})
  
  }
  if(response.data.status===200){
    notification.success({message:"session requested successful"});
   


     history.push("/dashboard")
     return window.location.reload();
  }
  else{
return notification.error({message:response.data.message})
  }
    // console.log('Received values of form: ', values);
  };



  
useEffect(() => {
  AuthApi.getAllSectors().then((res)=>{setSectors(res.data.data)});
  },[sectors])

    return (
      <Form 
      name="Session-Request"
        className="Session-Request"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        scrollToFirstError
      >
    
          <Row>
            <Col md="6">
  
            <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
           name="sectorname"
           label="SectorName"
           style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
           tooltip="What do you want others to call you?"
           rules={[
             {
               required: true,
               message: 'Please input your sectorname!',
               whitespace: true,
             },
           ]}
          >
            <Input  placeholder="Sectorname" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                whitespace: true,
              },
            ]}
          >
           <Input  placeholder="email" />
            
          </Form.Item>
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Form.Item
           name="phone"
           label="PhoneNumber"
           style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
           tooltip="What do you want others to call you?"
           rules={[
             {
               required: true,
               message: 'Please input your phone!',
               whitespace: true,
             },
           ]}
          >
            <Input  placeholder="PhoneNumber" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your address!',
                whitespace: true,
              },
            ]}
          >
           <Input  placeholder="address" />
            
          </Form.Item>
        </Form.Item>
  
        </Col>
          </Row>
      </Form>
       )
}

export default Session;