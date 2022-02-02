import React, { useState } from "react";

function Counter(){

    const[count, setCount] = React.useState(10)

    React.useState(()=>{
     const id =   setInterval(()=>{
         setCount((prevState)=>{
                    if(prevState === 0){
                        clearTimeout(id)
                    
                    return prevState;
                    }
                

                return prevState-1;
                //callback
            });
        }, 1000)
    
        //cleanup
        return()=>{
            console.log("clening up and int");
            clearInterval(id)
        }
    },[]);
    return (
        <div>
        <h1>Counter: {count}</h1>
        </div>
    )

}

export {Counter}