import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import SchedulerApi from "../services/SchedulerAuth";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import SchedulerSession from "../components/schedulerCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal,Tag,Space, Button,Table,Drawer,notification} from 'antd';
import { DeleteOutlined, EditOutlined, CloseSquareOutlined,CheckSquareOutlined } from '@ant-design/icons';
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


  const history = useHistory();
  
  
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
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: tag => {
            let color = tag === "AVAILABLE" ? 'red' : tag === "BOOKED" ? "#20c997" : "#422510";
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
                const deleteScheduler = async (id) => {
                    const response = await SchedulerApi.deleteOneScheduler(id);
                    console.log("response:", response);
                    if (!response) {
                      return notification.error({ message: "request failed,Network error" })
                
                    }
                    if (response.data.status === 200) {
                      notification.success({ message: "Scheduler requested successful" });
                
                
                
                      history.push("/dashboard")
                      return window.location.reload();
                    }
                    else {
                      return notification.error({ message: response.data.message })
                    }
                    // console.log('Received values of form: ', values);
                  };
                
                
                
                

                const book = async (id) => {
                    const response = await SchedulerApi.acceptscheduler(id);
                    console.log("response:", response);
                    if (!response) {
                      return notification.error({ message: "request failed,Network error" })
                
                    }
                    if (response.data.status === 200) {
                      notification.success({ message: "Scheduler Accepted successful" });
                
                
                
                      history.push("/dashboard")
                      return window.location.reload();
                    }
                    else {
                      return notification.error({ message: response.data.message })
                    }
                    // console.log('Received values of form: ', values);
                  };
                
                
                
                
                
              


                return (

                    
                    <Space size="middle">
                         {dataFromToken(token).role=="user"? (<>
                           {record.status!="AVAILABLE" ?
                           (<Link style={{textDecoration:"none"}} to="/appointments">APPLY</Link>) :
                           ( <a onClick={() => { book(record._id) }} style={{ color: "green" }}>BOOK</a>)}
                           
                        </>):(<></>)}
                        {dataFromToken(token).role=="Employee"? (<>
                             <a onClick={() => { setVisible(false); deleteScheduler(record._id) }}><DeleteOutlined /></a>
                            
                             </>):(<></>)}
                    </Space>
                )
            },
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

          {dataFromToken(token).role=="user"? (<></>) : dataFromToken(token).role=="admin"? (<></>):  (<Button style={{backgroundColor:"#20c997"}} onClick={showModal}>Create Scheduler</Button>)}

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