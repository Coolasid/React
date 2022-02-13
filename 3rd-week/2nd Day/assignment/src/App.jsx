
import './App.css';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Status } from './components/status';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Login></Login>
      <Status></Status>
    </div>
  );
}

export default App;
