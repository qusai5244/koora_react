import MatchList from '../Components/Match/Cards/MatchList';
import { Divider } from 'antd';

const App = () => {
  return (
    <>
        <div style={{ display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center'}}>
            <h1>المباريات </h1>
            <div style={{ width: '100%' }}>
              <MatchList />
            </div>
            <Divider/>
        </div>

        <div style={{ display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center'}}>
            <h1>الأخبار</h1>
            <div style={{ width: '100%' }}>
              <MatchList />
            </div>
            <Divider/>
        </div>
    </>
  );
};

export default App;
