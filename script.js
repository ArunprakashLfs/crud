'use strict'
//Getting input from users
let inputValue = document.getElementById("input-text");
let inputTime = document.getElementById("input-value");
let formEl = document.getElementById("form")
// console.log(inputValue);
// console.log(inputTime);

//creating empty array for store data
let todoList = [];

// let submitEl = document.getElementById("submit");
// console.log(submitEl);
let outputEl = document.getElementById("output");

//function
function todo(todoList) {
    let getValue = todoList.forEach((input)=>{
        console.log(input);
        console.log(todo);
    })
    console.log(getValue);
    
}


//add Event listners
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let input = inputValue.value;
    let time = inputTime.value;
    console.log(input);
    console.log(time);
    todoList = [input, time];
    console.log(todoList);
    outputEl.innerText = todoList;
    todo();
    // console.log(formEl);
})