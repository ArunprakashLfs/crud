'use strict'
//Getting input from users
let inputValue = document.getElementById("input-text");
let inputTime = document.getElementById("input-value");
let formEl = document.getElementById("form")
// console.log(inputValue);
// console.log(inputTime);

// let submitEl = document.getElementById("submit");
// console.log(submitEl);
let outputEl = document.getElementById("output");

//add Event listners
formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    let input = inputValue.value;
    let time = inputTime.value;
    console.log(input);
    console.log(time);
    // console.log(formEl);
})