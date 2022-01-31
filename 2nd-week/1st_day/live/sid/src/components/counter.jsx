import { useEffect, useState } from "react";

import "./counter.css";

export const Counter = () => {


    const [counter, setCounter] = useState(1);  

    const clickFun = (value) =>{

        // console.log(counter);
        
            if(value == 2 ){
                setCounter(counter*value )
            }else{
                
                setCounter(counter+value )
            }

        
        
    }

    if(counter == 10){
        return <h1>You are reached max counter value</h1>
    }
    

    return <div>
 
    <h3>Counter: {counter} </h3>

    <p className={counter % 2 == 0 ? "green" : "red"}>Counter is: {counter % 2 == 0 ? "Even" : "Odd"}</p>
    <button onClick={()=>{clickFun(1)}}>Add 1</button>
    
    <button onClick={() => {clickFun(-1)}}>Dec 1</button>

    <button onClick={() => {clickFun(2)}}>Multi 2</button>
    </div>
}