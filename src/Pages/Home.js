import MatchList from '../Components/Match/Cards/MatchList';
const App = () => {
  return (
    <>
        <div style={{ display: 'flex',flexDirection:'column' , justifyContent: 'center', alignItems: 'center'}}>
            <h1>مباريات اليوم</h1>
            <div className="match-container">
                <MatchList />
            </div>
            <hr style={{ width: '100%', border: 'none', borderTop: '2px solid #000', marginTop: '20px' }} />
        </div>
    </>
  );
};

export default App;
