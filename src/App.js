import React, { useState } from 'react';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Select, Avatar, Popover, Typography, Space, Row, Col } from 'antd';
import Profile from './Profile';
import Dashboard from './Dasboard';
import items from './items';
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className='header'
        style={{
          zIndex: 100,
          padding: 0,
          background: colorBgContainer,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          height: '75px'
        }}
      >
        <Row align={"middle"}>
          <Col span={6}>
            <Row align={"middle"}>
              <Col span={5}>
                <Row justify={'center'}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            /></Row></Col>
            <img src='./logo2.png' alt='' style={{width:'100px'}}></img>
            </Row>
          </Col>

          <Col span={18}>
            <Row justify={'end'} align={'middle'}>
              <Col span={4}>
                <Button type="primary" icon={<FileTextOutlined />} size='middle'>DOCUMENTATION</Button></Col>
              <Col span={3} >
                <Select
                  defaultValue="English"
                  className="custom-select"
                  style={{
                    width: 'fit-content',
                    // margin: '0 20px'
                  }}
                  options={[
                    {
                      value: 'english',
                      label: 'English',
                      // className: 'option'
                    },
                    {
                      value: 'hindi',
                      label: 'Hindi',
                    },
                    {
                      value: 'russian',
                      label: 'Russian',
                    },
                    {
                      value: 'french',
                      label: 'French',
                    },
                  ]}
                />
              </Col>
              <Col span={2}>
                <Popover placement="bottomLeft" title={<Profile></Profile>}>
                  <Avatar size={40} icon={<UserOutlined />} style={{
                    border: '3px solid #F87060',
                    // margin: '0 30px'
                  }} />

                </Popover>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* </div> */}

      </Header >

      <Layout style={{
        minHeight: '100vh',
      }}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light' width={'250px'} style={{
          alignContent: 'center',
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        }} >

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              // width: '90%',
              margin: 'auto',
              marginTop: 20,
            }}
            items={items}
          />
        </Sider>

        <Layout style={{
          padding: '16px', // Add padding to the borders
          paddingTop: 0,
          minHeight: 280,
          background: `url('./bg.png')`,
          backgroundSize: 'contain', // Decrease the size of the background image
          backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
          backgroundPosition: 'center',
          // marginTop: '20px',
        }}>
          <Content>
            <Space size="large"></Space>
            <Typography.Title level={2} style={{
              margin: '30px 20px',
            }}>Customer</Typography.Title>

            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)"
              }}
            >
              <Dashboard></Dashboard>
            </Content>
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default App;