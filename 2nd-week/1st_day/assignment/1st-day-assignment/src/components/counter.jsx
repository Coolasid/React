import { useEffect, useState } from "react";

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

    

    return <div>
 
    <h3>Counter: {counter} </h3>
    <button onClick={()=>{clickFun(1)}}>Add 1</button>
    
    <button onClick={() => {clickFun(-1)}}>Dec 1</button>

    <button onClick={() => {clickFun(2)}}>Multi 2</button>
    </div>
}