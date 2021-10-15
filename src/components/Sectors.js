import React,{useState,useEffect} from 'react';
import {Card} from 'antd';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import avatar from "../assets/ava.jpg";
import a from "../assets/a.jpg";


import AuthApi from "../services/Auth";

const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

const Sectors =()=>{
  const [allSectors,setAllSectors] =useState([]);

  useEffect(() => {
    AuthApi.getAllSectors().then((res)=>{setAllSectors(res.data.data)});
  },[])

    return(
<Card>
<List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 1,
    }}
    dataSource={allSectors}
    footer={
      <div>
        <b>@Copy Right2021 </b>
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item._id}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={avatar}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={a} />}
          title={<a href={item.href}>{item.firstName + " "+ item.lastName}</a>}
          description={item.career}
        />
        {item.aboutMe}
      </List.Item>
    )}
  />
</Card>
    )
}
export default Sectors;