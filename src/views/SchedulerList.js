import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import SchedulerApi from "../services/SchedulerAuth";

import SchedulerSession from "../components/schedulerCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal,Tag,Space, Button,Table,Drawer,notification} from 'antd';






const SchedulerList = () => {


  const token = localStorage.getItem("civil_token");
  const [scheduler, setScheduler] = useState({});
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
          title: 'Services Name',
          dataIndex: 'services',
          key: 'services',
          render: text => <a>{text}</a>,
      },
     
      {
          title: 'sectorName',
          dataIndex: 'sector',
          key: 'sector',
        render: sector => <a>{sector.sectorName} </a>,
      },
      {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
      },
      {
          title: 'Time to Start',
          key: 'timeToStart',
          dataIndex: 'timeToStart',
         
      },
      {
        title: 'Time to End',
        key: 'timeToEnd',
        dataIndex: 'timeToEnd',
       
    },
     
  ];


  useEffect(() => {
      SchedulerApi.getAllSchedulers(dataFromToken(token)).then((response) => {

         // console.log(response.data.data) ;
          setData(response.data.data);

      });

  },[]);
  return (
      <>
          <DashboardLayout>

          {dataFromToken(token).role=="user"? (<></>) : dataFromToken(token).role=="admin"? (<></>):  (<Button onClick={showModal}>Create Scheduler</Button>)}

<Table columns={columns} dataSource={data} />

<Modal title="New Scheduler" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <div style={{ padding: "30px" }}>
        <SchedulerSession/>
        

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
                <UserProfile session={scheduler} />
            </Drawer>
        </>
    )
}

export default SchedulerList;