import React from 'react';
import { Col, Row } from 'antd';
import SingleMatch from './SingleMatch.js';
import '../../Match/match.css';

const App = () => (
  <div className='match-container'>
      <SingleMatch />
      <SingleMatch />
      <SingleMatch />
  </div>
);

export default App;
