import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Select, Avatar, Popover, Divider, Typography, Space } from 'antd';
import Profile from './Profile';
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          height: '75px'
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <div className='header-right'>

          <Button type="primary" icon={<FileTextOutlined />} size='middle'>DOCUMENTATION</Button>
          <Select
            defaultValue="ENGLISH"
            className="custom-select"
            style={{
              width: 'fit-content',
              margin: '0 20px'
            }}
            options={[
              {
                value: 'english',
                label: 'ENGLISH',
              },
              {
                value: 'hindi',
                label: 'HINDI',
              },
              {
                value: 'russian',
                label: 'RUSSIAN',
              },
              {
                value: 'french',
                label: 'FRENCH',
              },
            ]}
          />
          <Popover placement="bottomLeft" title={<Profile></Profile>}>
            <Avatar size={40} icon={<UserOutlined />} style={{
              border: '3px solid #F87060',
              margin: '0 30px'
            }} />

          </Popover>

        </div>

      </Header >

      <Layout style={{
        minHeight: '100vh',
      }}>
        <Sider trigger={null} collapsible collapsed={collapsed} theme='light' style={{
          alignContent: 'center',
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
        }} >

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              width: '85%',
              margin: 'auto',
              marginTop: 20,
            }}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'nav 1',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
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
          marginTop: '20px',
        }}>
          <Content>
            <Space size="large"></Space>
            <Typography.Title level={3} style={{
              margin: '20px 20px',
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
              <Button type="primary">Primary</Button>
              <Button className='default'>Default</Button>
            </Content>
          </Content>
        </Layout>
      </Layout>
    </Layout >
  );
};
export default App;