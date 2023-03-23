'use strict'
//Getting input from users
let inputValue = document.getElementById("input-text");
let inputTime = document.getElementById("input-value");
let formEl = document.getElementById("form")
let listEl = document.getElementById("list");
// console.log(inputValue);
// console.log(inputTime);

//creating empty array for store data
let todoArray = [];

// let submitEl = document.getElementById("submit");
// console.log(submitEl);
let outputEl = document.getElementById("output");

//function
function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } 
    else {
        todoArray = JSON.parse(todo);
    }
    outputEl.innerText = null;
    todoArray.forEach((list) => {
        const {input, time} = list ;
        let listEl = document.createElement("li");
        listEl.classList.add("listel");
        listEl.innerHTML = `
        <span class="input-value">${input}</span>
        <span class="input-time">${time}</span>
        <button onclick="edit" class ="edit">❕</button>
        <button onclick="delete" class = "delete">❌</button>
        `
        outputEl.appendChild(listEl);
        console.log(outputEl);
    
    });
}
   



//add Event listners
formEl.addEventListener("submit", function (e) {
    // e.preventDefault();
    // let input = inputValue.value;
    // let time = inputTime.value;
    // console.log(input);
    // console.log(time);
    // // outputEl.innerHTML = input;
    // // outputEl.innerHTML = time;
    // todo(todoList);
    // console.log(formEl);
    e.preventDefault();
    let input = inputValue.value;
    let time = inputTime.value;
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        todoArray = [];
    } else {
        todoArray = JSON.parse(todo);
    }
    // todoArray.push(inputValue.value, inputTime.value);
    // inputValue.value = "";
    // inputTime.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
});