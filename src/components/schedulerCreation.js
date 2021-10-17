import React,{useState, useEffect } from 'react';

import { Form, Modal, Input, Table, Button, Select, DatePicker,Row,Col,notification} from 'antd';
import {useHistory} from "react-router-dom";
 
  import SectorApi from '../services/SectorAuth';
  
  import SchedulerApi from '../services/SchedulerAuth';



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
  
 
  

const SchedulerCreation =()=>{
  const [schedulers,setSchedulers]=useState([]);
  const [sectors,setSectors]=useState([]);
  const history = useHistory();

  const onFinish = async(values) => {
  const response= await SchedulerApi.createscheduler(values);
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
  SectorApi.getAllSectors().then((res)=>{setSectors(res.data.data)});
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
           name="services"
           label="Service Name"
           style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
           tooltip="What do you want others to call you?"
           rules={[
             {
               required: true,
               message: 'Please input your services!',
               whitespace: true,
             },
           ]}
          >
            <Input  placeholder="services you want" />
          </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            
          
            <Form.Item label="Select Sector" name="sector"
            >
   
   <Select
                       showSearch
                       style={{ width: 200 }}
                       placeholder="Select the sector"
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
                           sectors.map((sector) => (
                               <Option value={sector._id}>{sector.sectorName}</Option>
                           ))
                       }
   
   
                   </Select>
               </Form.Item>
               </Form.Item>
               <Form.Item style={{ marginBottom: 0 }}>
       
             <Form.Item
             name="date"
             label="Date"
             style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
             rules={[{ required: true, message: 'Please input your starting time!' }]}
           >
             <DatePicker />
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
               Create Scheduler
             </Button>
            
           </Form.Item>
           </Form.Item>
       
        </Col>
          </Row>
      </Form>
       )
}

export default SchedulerCreation;


