import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import AppointmentApi from "../services/AppointmentAuth";

import AppointmentSession from "../components/appointmentCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal,Tag,Space, Button,Table,Drawer,notification} from 'antd';
import Scheduler from "./SchedulerList";
import Schedulers from "./dashboard/Scheduler";





const AppointmentList = () => {


  const token = localStorage.getItem("civil_token");
  const [appointment, setAppointment] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };


  const handleOk = () => {
      setIsModalVisible(false);
  };

  const handleCancel = () => {
      setIsModalVisible(false);
  };


  const onClose = () => {
      setVisible(false);

  }

  const columns = [
      {
          title: 'User',
          dataIndex: 'NormalUser',
          key: 'NormalUser',
          render: NormalUser => <a>{NormalUser.firstName} {NormalUser.lastName} </a>,
      },
     
      {
          title: 'Schedulers',
          dataIndex: 'Scheduler',
          key: 'Scheduler',
        render: Scheduler => <a>{Scheduler.services} </a>,
      },
      {
          title: 'Comment',
          dataIndex: 'Comment',
          key: 'Comment',
      },
      {
          title: 'PartnerName',
          key: 'partnerName',
          dataIndex: 'partnerName',
         
      },
      {
        title: 'PartnerNationalId',
        key: 'partnerNationalId',
        dataIndex: 'partnerNationalId',
       
    },
      {
        title: 'Registration Date',
        key: 'registeredOn',
        dataIndex: 'registeredOn',
       
    },
     
  ];


  useEffect(() => {
    AppointmentApi.getAllAppontments(dataFromToken(token)).then((response) => {

         // console.log(response.data.data) ;
          setData(response.data.data);

      });

  },[]);
  return (
      <>
          <DashboardLayout>

          {dataFromToken(token).role=="admin"? (<></>): (<Button onClick={showModal}>Create Appointment</Button>)}

<Table columns={columns} dataSource={data} />

<Modal title="New Appointment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <div style={{ padding: "30px" }}>
        <AppointmentSession/>
        

    </div>
</Modal>


          </DashboardLayout>




<Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <UserProfile session={appointment} />
            </Drawer>
        </>
    )
}

export default AppointmentList;