 import './App.css';
// import { useEffect, useRef, useState } from 'react';

import { useRef } from "react";
import { Form } from "./components/form";

// //////simple timer function///////
// /*

// function App() {

//   const [counter, setCounter] = useState(0);
//   const timerRef = useRef();
  

//   useEffect(()=>{
//     startTimer()
//   },[])

//   const startTimer = () =>{
//     timerRef.current =  setInterval(()=>{
//       setCounter((p)=> p+1);
//     },1000)
//   }
  

//   return (
//     <div className="App">
//       <h3>Counter: {counter}</h3>

//       <button onClick={()=>{
//         clearInterval(timerRef.current);
//       }}>
//         Pause
//       </button>

//       <button onClick={()=>{
//           startTimer();
//       }}>
//         Start
//       </button>

//       <button onClick={()=>{
//         setCounter(0)
//         clearInterval(timerRef.current);
//       }}>
//         Reset
//       </button>
     
//     </div>
//   );
// }

// */

// //////// Scroll function//////////

function App(){
  // const myRef = useRef();

return (
  <div className="App">
    {/* <div
    ref={myRef}
      style={{
        height: "400px",
        width: "250px",
        backgroundColor: "coral"
      }}
    >
      div 1
    </div>

    <div
      style={{
        height: "400px",
        width: "250px",
        backgroundColor: "teal"
      }}
    >
      div 2
    </div>

    <div
      style={{
        height: "400px",
        width: "250px",
        backgroundColor: "coral"
      }}
    >
      div 3
    </div>

    <div
      style={{
        height: "400px",
        width: "250px",
        backgroundColor: "teal"
      }}
    >
      div 4
    </div>

    <button onClick={()=>{
      myRef.current.style.backgroundColor = "red";
      myRef.current.scrollIntoView({behavior :"smooth"});
    }}>Go To Top</button> */}

    {/* ///////////////// */}

    <Form></Form>



  </div>
  
);
}

export default App;


