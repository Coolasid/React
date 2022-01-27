import { add, mult } from "./calc";

import "./style.css"


console.log(add(5,5));
console.log(mult(10,20));


const h1 = document.createElement("h1");

h1.classList.add("redText");
h1.innerText = "hello sid"

document.getElementById("root").appendChild(h1);