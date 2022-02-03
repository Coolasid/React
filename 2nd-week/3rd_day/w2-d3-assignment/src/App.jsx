
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [counter1, setCounter1] = useState(1);

  let [counter2, setCounter2] = useState(1)

  useEffect(()=>{
    
    setCounter2(counter1*2);
    
  },[counter1])
  
  
  return (
    <div className="App">

      <h3>Counter 1: {counter1}</h3>
      <h3>Counter 2: {counter2}</h3>

      <button onClick={()=>{
        
        if(counter1 > 9){
          
         return setCounter2(0)
        }else{
          setCounter1(counter1+1);

        }


      }}>Add</button>
    </div>
  );
}

export default App;
