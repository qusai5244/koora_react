import image from '../../../imgs/image.jpg';
import image2 from '../../../imgs/image2.jpg';

import { Card } from 'antd';
const App = () => {
  return(
    <Card 
    title={<div style={{ textAlign: 'center' }}>كأس إزكي</div>} 
    bordered={false}
    style={{ width: '100%', margin: '10px 0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
      {/* Team 1 */}
      <div>
        <img src={image} alt="Team 1" style={{ width: '40px', height: 'auto', marginBottom: '5px' }} />
        <h3 style={{ margin: 0 }}>الصقر</h3>
      </div>
      
      {/* Match Time */}
      <div style={{ fontSize: '15px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '0 50px' }}>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <i className="fa-regular fa-calendar-days"></i>
          <p style={{ margin: 0 }}>18/03</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <i className="fa-regular fa-clock"></i>
          <p style={{ margin: 0 }}>18:00</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <i className="fa-solid fa-location-dot"></i>
          <p style={{ margin: 0 }}>ملعب الأهلي</p>
        </div>
      </div>
      
      {/* Team 2 */}
      <div>
        <img src={image2} alt="Team 2" style={{ width: '40px', height: 'auto', marginBottom: '5px' }} />
        <h3 style={{ margin: 0 }}>الأهلي</h3>
      </div>
    </div>
  </Card>
  );  
};

export default App;
