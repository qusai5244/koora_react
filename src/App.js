import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './Layout/SideBar';
function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
      </div>
    </Router>
  );
}

export default App;
