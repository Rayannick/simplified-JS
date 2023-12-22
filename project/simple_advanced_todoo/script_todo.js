const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = []
// show it in font end
// click to remove
//








// step 1
form.addEventListener("submit", e => {
    e.preventDefault()
    const todoName = todoInput.value;  // take input


    if(todoName === '') return;
    const newTodo = {
        name: todoName,
        id : Math.floor(Math.random() * 100),
        complete : false

    }

todos.push(newTodo);

    console.log(todos)

})


// step 2

function saveTodos(){  // save in localstorage

    localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}