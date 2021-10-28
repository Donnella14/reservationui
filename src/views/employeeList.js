import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import SectorApi from "../services/SectorAuth";
import Session from "../components/SectorCreation";
import AuthApi from  "../services/Auth";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal,Tag,Space, Button,Table,Drawer,notification} from 'antd';






const EmployeeList = () => {


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
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName',
          render: text => <a>{text}</a>,
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        
        //render: Employee => <a>{Employee.firstName}  {Employee.lastName}</a>,
    
    },
      {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
      },
      {
        title: 'National Identity',
        dataIndex: 'nationalId',
        key: 'nationalId',
    },
      {
          title: 'Phone Number',
          dataIndex: 'phone',
          key: 'phone',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
      {
          title: 'Address',
          key: 'address',
          dataIndex: 'address',
         
      },
     
  ];



  useEffect(() => {
    AuthApi.getAllEmployees(dataFromToken(token)).then((response) => {

        //console.log(response.data.data) ;
        setData(response.data.data);

    });

},[]);

  return (
      <>
          <DashboardLayout>

           {dataFromToken(token).role=="user"? (<></>) : dataFromToken(token).role=="Employee"? (<></>): (<></>)} 

<Table columns={columns} dataSource={data} />

{/* <Modal title="New Sector" visible={isModalVisible}  onOk={handleOk} onCancel={handleCancel}>
    <div style={{ padding: "30px" }}>
        <Session />

    </div>
</Modal> */}


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

export default EmployeeList;