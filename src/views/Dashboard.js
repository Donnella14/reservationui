import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import SessionAPI from "../services/Session";
import userAPI from "../services/Auth";
import Session from "../components/Session";
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
          title: 'Session Title',
          dataIndex: 'title',
          key: 'title',
          render: text => <a>{text}</a>,
      },
      {
          title: 'Sector',
          dataIndex: 'sector',
          key: 'sector',

          render: sector => <a>{sector.sectorName} </a>,
      },
      {
          title: 'Start Time',
          dataIndex: 'timeToStart',
          key: 'timeToStart',
      },
      {
          title: 'End Time',
          dataIndex: 'timeToEnd',
          key: 'timeToEnd',
      },
      {
          title: 'Status',
          key: 'status',
          dataIndex: 'status',
          render: tag => {
              let color = tag === "pending" ? 'black' : tag === "accept" ? "green" : "red";
              return (
                  <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                  </Tag>
              );

          },
      },
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => {
              const deleteSession = async (id) => {
                  const response = await SessionAPI.deleteOneSession(id);
                  console.log("response:", response);
                  if (!response) {
                      return notification.error({ message: "failed to respond!" })
                  }
                  return notification.success({ message: "success deleted" })

              }
              const updateSession = async (id) => {
                const response = await userAPI.updateOneSession(id);
                console.log("response:", response);
                if (!response) {
                    return notification.error({ message: "failed to respond!" })
                }
                return notification.success({ message: "success deleted" })

            }
              return (
                  <Space size="middle">
                    <a onClick={() => { setVisible(true); setSession(record) }}>View</a>
                    { dataFromToken(token).role=="user" ? ( <>
                    <a onClick={() => { deleteSession(record._id) }}>Delete</a>
                    <a onClick ={()=> {updateSession(record._id)}}>Edit</a> </>):(
<>
<a style={{color:"green"}}>Accept</a>
<a style={{color:"red"}}>Decline</a>
</>
                      )}
                  </Space>
              )
          },
      },
  ];


  useEffect(() => {
      SessionAPI.getAllSector(dataFromToken(token)).then((response) => {

         // console.log(response.data.data) ;
          setData(response.data.data);

      });

  },[]);
  return (
      <>
          <DashboardLayout>

            
              <Table columns={columns} dataSource={data} />

              <Modal title="New Sector" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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