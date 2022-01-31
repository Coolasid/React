
import React from 'react';

export default function Counter() {

 const [counter, setCounter] =  React.useState(5)
 //destructuring
 //React.useState => [value, setValue]
 const handleIcr = (value) =>{
  setCounter(counter + value)
 }
  return (
    <>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={()=> handleIcr(1)}>ADD</button>
        <button onClick={()=> handleIcr(-1)}>REDUCE</button>
    </>
  );
}

