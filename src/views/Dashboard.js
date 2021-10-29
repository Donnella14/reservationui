import React,{useEffect, useState} from "react";
import 'antd/dist/antd.css';

import SectorApi from "../services/SectorAuth";
import Session from "../components/SectorCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal,Tag,Space, Button,Table,Drawer,notification} from 'antd';






const Dashboard = () => {


  const token = localStorage.getItem("civil_token");
  const [session, setSession] = useState({});
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
          title: 'Sector Name',
          dataIndex: 'sectorName',
          key: 'sectorName',
          render: text => <a>{text}</a>,
          sorter: true,
            width: '20%',
      },
      {
        title: 'EmployeeName',
        dataIndex: 'Employee',
        key: 'Employee',
        sorter: true,
        width: '20%',
        render: Employee => <a>{Employee.firstName}  {Employee.lastName}</a>,
    
    },
      {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          sorter: true,
            width: '20%',
      },
      {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
          sorter: true,
            width: '20%',
      },
      {
          title: 'Address',
          key: 'address',
          dataIndex: 'address',
          sorter: true,
          width: '20%',
      },
     
  ];



  useEffect(() => {
    SectorApi.getAllSectors(dataFromToken(token)).then((response) => {

        //console.log(response.data.data) ;
        setData(response.data.data);

    });

},[]);

  return (
      <>
          <DashboardLayout>

           {/* {dataFromToken(token).role=="admin"? (<></>) : dataFromToken(token).role=="Employee"? (<></>): (<Button style={{backgroundColor:"#20c997"}} onClick={showModal}>Create Sector</Button>)}  */}

<Table columns={columns} dataSource={data} />

<Modal title="New Sector" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
    <div style={{ padding: "30px" }}>
        <Session />

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
                <UserProfile session={session} />
            </Drawer>
        </>
    )
}

export default Dashboard;