const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const todos = []
// take input
// save in localstorage
// show it in font end
// click to remove
//









form.addEventListener("submit", e => {
    e.preventDefault()
    const todoName = todoInput.value;

    if(todoName === '') return;
    const newTodo = {
        name: todoName,
        id : Math.floor(Math.random() * 100),
        complete : false

    }

todos.push(newTodo);

    console.log(todos)

})