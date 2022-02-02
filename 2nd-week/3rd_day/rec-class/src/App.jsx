
import React from 'react';
import './App.css';
import { Counter } from './counter/counter';
import { Example } from './counter/example';
import { Todo } from './counter/Todo';



function App() {

  const [count, setCount] = React.useState(0)

  console.log(1);
  //mounting phase
  React.useEffect(()=>{
    console.log('inside useEffect');
  }, [])
  //no dependencies
  console.log(2);

  React.useEffect(()=>{
      document.title = `you have clicked ${count} times`
  },[count])
  //count as dependencies


  const [showCounter, setShowCounter] = React.useState(false);

  //useEffect(callback, dependency array)
  return (
    <div className="App">
       {/* <h2>Count: {count}</h2>
       <button onClick={()=>{
         setCount(count+1)
       }}>Add</button> */}

       {showCounter && <Counter></Counter>}
       <br />
       <button onClick={()=> setShowCounter(!showCounter)}>Show</button>
       <Example></Example>

       <Todo></Todo>
    </div>
  );
}

export default App;
