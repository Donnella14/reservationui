import React,{useState, useEffect } from 'react';

import { Form, Modal, Input, Table, Button, Select, DatePicker,Row,Col,notification} from 'antd';
import {useHistory} from "react-router-dom";
 
  import AuthApi from '../services/Auth';
  
  import SchedulerApi from '../services/SchedulerAuth';

import AppointmentApi from '../services/AppointmentAuth';
import AppointmentList from '../views/AppointmentList';
import SectorApi from '../services/SectorAuth';

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
  
 
  

const AppointmentCreation =()=>{
  const [schedulers,setSchedulers]=useState([]);
  const [employees,setEmployees]=useState([]);
  const [users,setUsers]=useState([]);
  const [sectors,setSectors]=useState([]);
  const history = useHistory();

  const onFinish = async(values) => {
  const response= await AppointmentApi.createappointment(values);
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

useEffect(() => {
  SchedulerApi.getAllSchedulers().then((res)=>{setSchedulers(res.data.data)});
  },[schedulers])
 
  useEffect(() => {
    AuthApi.getAllEmployees().then((res) => { setEmployees(res.data.data) });
  }, [employees])
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
            label="Select Sector" 
            name="sector"
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
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
        
            <Form.Item 
            label="Select Scheduler"
             name="Scheduler"
             style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
            >
   
   <Select
                       showSearch
                       style={{ width: 200 }}
                       placeholder="Select the scheduler"
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
                           schedulers.map((Scheduler) => (
                               <Option value={Scheduler._id}>{Scheduler.services}</Option>
                           ))
                       }
   
   
                   </Select>
               </Form.Item>
               </Form.Item> 


               <Form.Item 
            label="Select Employee"
             name="Employee"
             style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
            >
   
   <Select
                       showSearch
                       style={{ width: 200 }}
                       placeholder="Select the Employee"
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
                           employees.map((Employee) => (
                               <Option value={Employee._id}>{Employee.firstName} {Employee.lastName}</Option>
                           ))
                       }
   
   
                   </Select>
               </Form.Item>
         

               <Form.Item style={{ marginBottom: 0 }}>
       
             <Form.Item
             name="Comment"
             label="Comment"
             style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
             
            rules={[{ required: true, message: 'Please input your comment!' }]}
           >
             <Input />
             </Form.Item>
      
             <Form.Item
             name="partnerName"
             label="Partner Name"
             style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
             rules={[{ required: true, message: 'Please input your PartnerName!' }]}
           >
             <Input />
             </Form.Item>
             </Form.Item>

             <Form.Item style={{ marginBottom: 0 }}>
       
       <Form.Item
       name="partnerNationalId"
       label="Partner ID"
       style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
             
       rules={[{ required: true, message: 'Please input your Partner ID!' }]}
     >
       <Input />
       </Form.Item>
       
             <Form.Item
             name="registeredOn"
             label="Registered On"
             style={{  display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px'  }}
      
            rules={[{ required: true, message: 'Please input your registration date!' }]}
           >
             <DatePicker />
           </Form.Item>
     </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
           <Form.Item>
             <Button class="form-control" style={{backgroundColor:"#20c997"}} htmlType="submit">
               Create Appointment
             </Button>
            
           </Form.Item>
           </Form.Item>
       
        </Col>
          </Row>
      </Form>
       )
}

export default AppointmentCreation;


