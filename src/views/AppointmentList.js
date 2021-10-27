import React, { useEffect, useState } from "react";

import 'antd/dist/antd.css';

import AppointmentApi from "../services/AppointmentAuth";

import AppointmentSession from "../components/appointmentCreation";
import DashboardLayout from "../components/DashboardLayout";
import dataFromToken from "../utils/tokenDecorder";

import { Modal, Tag, Space, Button, Table, Drawer, notification } from 'antd';
import { DeleteOutlined, EditOutlined, CloseSquareOutlined,CheckSquareOutlined } from '@ant-design/icons';

import SessionProfile from "../components/SessionProfile";
import { useHistory } from "react-router-dom";




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
    const history = useHistory();
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
            title: 'Employee Name',
            dataIndex: 'Employee',
            key: 'Employee',
            render: Employee => <a>{Employee.firstName} {Employee.lastName}</a>,
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
                let color = tag === "pending" ? 'red' : tag === "decline" ? "#20c997" : "#422510";
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
                        return notification.error({ message: "request failed,Network error" })

                    }
                    if (response.data.status === 200) {
                        notification.success({ message: "Appointment deleted successful" });



                        history.push("/dashboard")
                        return window.location.reload();
                    }
                    else {
                        return notification.error({ message: response.data.message })
                    }
                    // console.log('Received values of form: ', values);
                };




                const updateAppointment = async (id) => {
                    const response = await AppointmentApi.updateOneAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "request failed,Network error" })

                    }
                    if (response.data.status === 200) {
                        notification.success({ message: "Appointment Updated successful" });



                        history.push("/dashboard")
                        return window.location.reload();
                    }
                    else {
                        return notification.error({ message: response.data.message })
                    }
                    // console.log('Received values of form: ', values);
                };





                const acceptAppointments = async (id) => {
                    const response = await AppointmentApi.acceptAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "request failed,Network error" })

                    }
                    if (response.data.status === 200) {
                        notification.success({ message: "Appointment Accepted successful" });



                        history.push("/dashboard")
                        return window.location.reload();
                    }
                    else {
                        return notification.error({ message: response.data.message })
                    }
                    // console.log('Received values of form: ', values);
                };




                const declineAppointments = async (id) => {
                    const response = await AppointmentApi.declineAppointment(id);
                    console.log("response:", response);
                    if (!response) {
                        return notification.error({ message: "request failed,Network error" })

                    }
                    if (response.data.status === 200) {
                        notification.success({ message: "Appointment Declined successful" });



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
                        {dataFromToken(token).role == "Employee" ? (<>

                            <a onClick={() => { acceptAppointments(record._id) }} style={{ color: "green" }}><CheckSquareOutlined /></a>
                            <a onClick={() => { declineAppointments(record._id) }} style={{ color: "red" }}><CloseSquareOutlined /></a>
                        </>) : (<></>)}



                        {dataFromToken(token).role == "user" ? (<>
                            <a onClick={() => { setVisible(false); deleteAppointment(record._id) }} ><DeleteOutlined /></a>
                            <a><EditOutlined /></a>
                        </>) : (<></>)}



                    </Space>
                )
            },
        },
    ];


    useEffect(() => {
        AppointmentApi.getAllAppontments(dataFromToken(token).id).then((response) => {

            // console.log(response.data.data) ;
            setData(response.data.data);

        });

    }, []);
    return (
        <>
            <DashboardLayout>

                {dataFromToken(token).role == "admin" ? (<></>) : dataFromToken(token).role == "Employee" ? (<></>) : (<Button style={{ backgroundColor: "#20c997" }} onClick={showModal}>Create Appointment</Button>)}

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