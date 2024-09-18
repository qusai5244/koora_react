import React, { useState } from 'react';
import MatchCard from '../Components/Match/MatchCard';
import '../Components/Match/match.css';

const App = () => {
  return (
    <>
        <div style={{ display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center'}}>
            <h1>مباريات اليوم</h1>
            <div className="match-container">
                <MatchCard />
                <MatchCard />
                <MatchCard />
            </div>
            <hr style={{ width: '100%', border: 'none', borderTop: '2px solid #000', marginTop: '20px' }} />
        </div>
    </>
  );
};

export default App;
