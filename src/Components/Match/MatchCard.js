import React from 'react';
import { Avatar, Card } from 'antd';
import './match.css';
const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    onClick={() => {
      // Handle click event here
      alert("Card clicked!");
    }}
    style={{
      minWidth: "30%",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
      margin: "10px",
    }}
    bodyStyle={{
      textAlign: "center",
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        style={{
          transition: "transform 0.3s",
        }}
      />
    }
  >
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>الصقر - الأهلي</h2>
      <p>الدوري السعودي</p>
      <p>الساعة 9:00 مساءً</p>
    </div>
  </Card>
);

export default App;
