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
  const [mentors,setMentors]=useState([]);
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
  AuthApi.getAllMentors().then((res)=>{setMentors(res.data.data)});
  },[mentors])

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
           name="title"
           label="Title"
           style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
           tooltip="What do you want others to call you?"
           rules={[
             {
               required: true,
               message: 'Please input your title!',
               whitespace: true,
             },
           ]}
          >
            <Input  placeholder="title" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your description!',
                whitespace: true,
              },
            ]}
          >
           <Input  placeholder="description" />
            
          </Form.Item>
        </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
            
          
         <Form.Item label="Select Mentor"name="mentor"
         >

<Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        mentors.map((mentor) => (
                            <Option value={mentor._id}>{mentor.firstName} {mentor.lastName} </Option>
                        ))
                    }


                </Select>
            </Form.Item>
            </Form.Item>
            
<Form.Item style={{ marginBottom: 0 }}>
    
          <Form.Item
          name="timeToStart"
          label="TimeToStart"
          style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
          rules={[{ required: true, message: 'Please input your starting time!' }]}
        >
          <DatePicker />
          </Form.Item>
          
          
          <Form.Item
          name="timeToEnd"
          label="TimeToEnd"
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          rules={[{ required: true, message: 'Please input your ending time!' }]}
        >
          <DatePicker />
        </Form.Item>
  </Form.Item>
       <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create Session
          </Button>
         
        </Form.Item>
        </Form.Item>
        </Col>
          </Row>
      </Form>
       )
}

export default Session;