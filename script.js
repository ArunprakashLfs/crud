'use strict'
//getting input elements
let inputEl = document.getElementById("input-text");
let timeEl = document.getElementById("input-value");
let submitEl = document.getElementById("submit");
let outputEl = document.getElementById("output");

//functions


//add eventlistner
submitEl.addEventListener("click", function (e) {
    e.preventDefault();
    let input = inputEl.value;
    let time = timeEl.value;
    console.log(input, time);
    
})
