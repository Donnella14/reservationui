import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import AppointmentApi from "../services/AppointmentAuth";

import AppointmentSession from "../components/appointmentCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";
import UserProfile from "../components/UserProfile";
import { Modal, Tag, Space, Button, Table, Drawer, notification } from 'antd';

import AuthApi from "../services/Auth";
import SessionProfile from "../components/SessionProfile";





const AppointmentList = () => {


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
            title: 'sectorName',
            dataIndex: 'sector',
            key: 'sector',
            render: sector => <a>{sector.sectorName} </a>,
        },

        {
            title: 'Schedulers',
            dataIndex: 'Scheduler',
            key: 'Scheduler',
            render: Scheduler => <a>{Scheduler.services}</a>,
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
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: tag => {
                let color = tag === "pending" ? 'black' : tag === "decline" ? "#20c997" : "#422510";
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
                const deleteAppointment = async (id) => {
                    const response = await AppointmentApi.deleteOneAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "failed to respond!" })
                    }
                    return notification.success({ message: "successfully deleted" })

                }
                const updateAppointment = async (id) => {
                    const response = await AppointmentApi.updateOneAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "failed to respond!" })
                    }
                    return notification.success({ message: "successfull Declined" })

                }

                const acceptAppointments = async (id) => {
                    const response = await AppointmentApi.acceptAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "failed to respond!" })
                    }
                    return notification.success({ message: "successfully accepted" })

                }
                const declineAppointments = async (id) => {
                    const response = await AppointmentApi.declineAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "failed to respond!" })
                    }
                    return notification.success({ message: "successfull Declined" })

                }



                return (

                    
                    <Space size="middle">
                         {dataFromToken(token).role=="Employee"? (<>
                           
                            <a onClick={() => { acceptAppointments(record._id) }} style={{ color: "green" }}>Approve</a>
                            <a onClick={() => { declineAppointments(record._id) }} style={{ color: "red" }}>Decline</a>
                        </>):(<></>)}
                        

                             
                        {dataFromToken(token).role=="user"? (<>
                             <a onClick={() => { setVisible(false); deleteAppointment(record._id) }}>Delete</a>
                            <a>Edit</a> 
                            </>):(<></>)}
                        
                          
   
                    </Space>
                )
            },
        },
    ];


    useEffect(() => {
        AppointmentApi.getAllAppontments(dataFromToken(token)).then((response) => {

            // console.log(response.data.data) ;
            setData(response.data.data);

        });

    }, []);
    return (
        <>
            <DashboardLayout>

                {dataFromToken(token).role == "admin" ? (<></>) : dataFromToken(token).role == "Employee" ? (<></>) : (<Button onClick={showModal}>Create Appointment</Button>)}

                <Table columns={columns} dataSource={data} />

                <Modal title="New Appointment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <div style={{ padding: "30px" }}>
                        <AppointmentSession />


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
                <SessionProfile session={session} />
            </Drawer>
        </>
    )
}

export default AppointmentList;