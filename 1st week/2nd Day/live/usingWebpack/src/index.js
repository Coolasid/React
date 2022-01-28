import { add, mult } from "./calc";

import "./style.css"

import React from 'react'  //light part 
import ReactDOM from 'react-dom'  //heavy part


console.log(add(5,5));
console.log(mult(10,20));

//react way=>

ReactDOM.render(
    //what to show
    <h1 className="redText">
        <p>Paragraph</p>
        <div>Hello</div>
        <p>
        <a href="#" >This is a link</a>
        

        </p>
    </h1>,
    //where to show
    document.getElementById("root")

) 

