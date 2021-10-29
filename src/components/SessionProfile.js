import React from 'react';
import { Divider, Col, Row } from "antd";
import "./index.css";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);


const SessionProfile = ({ session }) => {
  return (
    <>
      <p className="main-heading" style={{ marginBottom: 24 }}>
        USER PROFILE
      </p>
      <h3 className="main-heading">PERSONAL INFORMATION</h3>
    
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content={session.user.firstName + " " + session.user.lastName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Email" content={session.user.email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Phone" content={session.user.phone} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Gender" content={session.user.gender} />
        </Col>
       
      </Row>

      <Divider />
      <h3 className="main-heading">EMPLOYEE INFORMATION</h3>
   
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content={session.Employee.firstName + " " + session.user.lastName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Email" content={session.Employee.email} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Phone" content={session.Employee.phone} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Gender" content={session.Employee.gender} />
        </Col>
      </Row>
      <Row>
       
        <Col span={12}>
          <DescriptionItem title="Responsibilities" content="Civil Marriage Approval" />
        </Col>
      </Row>
    
      <Divider />
      <h3 className="main-heading">APPOINTMENT INFORMATION</h3>
    
      <Row>
         <Col span={12}>
          <DescriptionItem title="Partner Name" content={session.partnerName} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Narional Identity" content={session.partnerNationalId} />
        </Col>
       
       
      </Row>
      <Row>
      <Col span={12}>
          <DescriptionItem title="Comment" content={session.Comment} />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Status" content={session.status} />
        </Col>
      </Row>

      

      
      

    </>
  )
}

export default SessionProfile;