import { add, mult } from "./calc";

import "./style.css"

import React from 'react'  //light part 
import ReactDOM from 'react-dom'  //heavy part


console.log(add(5,5));
console.log(mult(10,20));

//react way=>

ReactDOM.render(
    //what to show
    React.createElement("h1", {className:"redText"}, "Hello sid react" ),
    //where to show
    document.getElementById("root")

) 


//old way=>
const h1 = document.createElement("h1");

h1.classList.add("redText");
h1.innerText = "hello sid"

document.getElementById("root").appendChild(h1);


