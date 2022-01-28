

import "./style.css"

import imgSrc from './notebook-logo.png'

let nav = document.getElementById("nav");
nav.classList.add("navBar")

    let logo = document.createElement("div")

        let img = document.createElement("img");

        img.src = imgSrc;
        img.classList.add("img")

        // img.classList.add("img")

    logo.append(img);

    let logoT = document.createElement("div")
    logoT.classList.add("logoT")
    logoT.textContent = "Note App"



nav.append(logo, logoT)

let inp = document.getElementById("inp");
inp.classList.add("inpBox")


// adding tasks =>

let button = document.getElementById("btn");



let appendTask = document.getElementById("showTask")

button.addEventListener("click", ()=>{

    
let valu = document.getElementById("val").value

    // console.log(valu);

    let div = document.createElement("div");
    div.classList.add("showTaskBox")

        let p = document.createElement("p");
        p.classList.add("para")

        p.innerText = valu;

        let delBtn = document.createElement("button");

        delBtn.innerText = "Delete"
        delBtn.addEventListener("click", ()=>{
            div.innerHTML = null;
        })


    div.append(p, delBtn)

    appendTask.append(div);


})


