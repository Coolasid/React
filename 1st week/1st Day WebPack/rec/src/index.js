// console.log("sid");

import { sidM } from './calc'

import React from 'react';

import ReactDOM  from 'react-dom';

import("./index.css")

console.log(sidM(3,5));


// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello Webpack";
// h1.classList.add("redText");

// document.getElementById("root").appendChild(h1)


ReactDOM.render(

    // React.createElement("div", { className: "redText bigText"},
    //     [
    //         "hello h1",
    //         React.createElement("i", null, "italic Text")]
    //     ), //what to render


    <h1>Hello New react</h1>,

    

    document.getElementById("root"), //where to render

)