'use strict'
//Getting input from users
let inputValue = document.getElementById("input-text");
let inputTime = document.getElementById("input-value");
let formEl = document.getElementById("form")
console.log(inputValue);
console.log(inputTime);

let submitEl = document.getElementById("submit");
let outputEl = document.getElementById("output");

//add Event listners
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
})