import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
// import home page 
import Home from './Pages/Home';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '90%',
              fontSize: '15px', // Increase icon size
            }}
            items={[
              {
                key: '1',
                icon: <UserOutlined style={{ fontSize: '24px' }} />, // Increase icon size
                label: 'الصفحة الرئيسية',
                style: { marginBottom: '20px' }, // Space between items
              },
              {
                key: '2',
                icon: <VideoCameraOutlined style={{ fontSize: '24px' }} />, // Increase icon size
                label: 'nav 2',
                style: { marginBottom: '20px' }, // Space between items
              },
              {
                key: '3',
                icon: <UploadOutlined style={{ fontSize: '24px' }} />, // Increase icon size
                label: 'nav 3',
                style: { marginBottom: '20px' }, // Space between items
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
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
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<div>About</div>} />
              {/* Add more routes as needed */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
