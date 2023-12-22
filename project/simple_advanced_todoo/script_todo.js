const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
const todos = loadTodos()
todos.forEach(renderTodo)
const template = document.querySelector("#list-item-template")
const list = document.querySelector('#list')

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
    saveTodos()
    renderTodo(newTodo)

})


// step 2



function saveTodos(){  // save in localstorage

    localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}

function loadTodos(){  //load items from localstorage and give object
   
    return JSON.parse( localStorage.getItem(TODOS_STORAGE_KEY))
}


function renderTodo(todos){  // show it in font end

    const templateClone = template.content.cloneNode(true)
    const listItem = templateClone.querySelector('.list-item')
    listItem.dataset.todoId = todos.id
    const textElement = templateClone.querySelector('[data-list-item-text')
    textElement.innerText = todos.name
    const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
    checkbox.checked = todos.complete
    list.appendChild(templateClone)
    

}