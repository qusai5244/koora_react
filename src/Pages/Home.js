import MatchList from '../Components/Match/Cards/MatchList';
import { Divider } from 'antd';

const App = () => {
  return (
    <>
        <div style={{ display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center'}}>
            <h1>مباريات اليوم</h1>
            <div style={{ width: '100%' }}>
              <MatchList />
            </div>
            <Divider dashed />
        </div>
    </>
  );
};

export default App;
