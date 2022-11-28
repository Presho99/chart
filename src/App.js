
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='App-inner'>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
