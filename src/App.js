import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { Button, Layout, Menu, theme } from 'antd';
import AppNavBar from './Layout/AppNavBar';
// import home page 
import Home from './Pages/Home';
import './App.css';


const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <AppNavBar />
          <Content
            style={{
              margin: '50px 16px 15px 16px',
              padding: 20,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/tournaments" element={<div>About</div>} />
              <Route path="/matches" element={<div>Contact</div>} />
              {/* Add more routes as needed */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
