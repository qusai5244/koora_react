import React from 'react';
import { Col, Row } from 'antd';
import SingleMatch from './SingleMatch.js';
import '../../Match/match.css';

const App = () => (
  <div className='matchs-container'>
      <SingleMatch />
      <SingleMatch />
      <SingleMatch />
      <SingleMatch />
  </div>
);

export default App;
