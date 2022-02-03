import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true);
  return (
    <div className="App">
      
      {show ? <Counter></Counter> : null}

      <button onClick={()=>{
        setShow(!show);
      }}>
      {show ? "Hide" : "Show"}  Counter
      </button>
    </div>
  );
}

export default App;
