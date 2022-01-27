

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


function appendTask(){
    alert();
}

