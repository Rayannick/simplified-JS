const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST"
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos()
const template = document.querySelector("#list-item-template")
const list = document.querySelector('#list')
todos.forEach(renderTodo)







list.addEventListener("change", e => {
    if (!e.target.matches("[data-list-item-checkbox]")) return
  
    const parent = e.target.closest(".list-item")
    const todoId = parent.dataset.todoId
    const todo = todos.find(t => t.id === todoId)
    todo.complete = e.target.checked
    saveTodos()
  })

  list.addEventListener('click', e =>{   // click to remove

    if(!e.target.matches("[data-button-delete]")) return

    const parent = e.target.closest('.list-item')
    const todoId = parent.dataset.todoId
    parent.remove()
    todos = todos.filter(todo => todo.id !== todoId)
    saveTodos()
})






// step 2



function saveTodos(){  // save in localstorage

    localStorage.setItem(TODOS_STORAGE_KEY,JSON.stringify(todos))
}

function loadTodos(){  //load items from localstorage and give object
   
    const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todosString) || []}






// list.addEventListener('change',e =>{
//     if(!e.target.matches("[data-list-item-checkbox]")) return
//     const parent = e.target.closest('.list-item')
//     const todoId = parent.dataset.todoId
//     const todo = todos.find(t => t.id ===todoId)
    
//     todo.complete = e.target.checked
//     saveTodos()
    
//     })








    

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

todos.push(newTodo)

    renderTodo(newTodo)
    saveTodos()
todoInput.value = ''

})
    
    // function renderTodo(todos){  // show it in font end
    
    //     const templateClone = template.content.cloneNode(true)
    //     const listItem = templateClone.querySelector('.list-item')
    //     listItem.dataset.todoId = todos.id
    //     const textElement = templateClone.querySelector('[data-list-item-text')
    //     textElement.innerText = todos.name
    //     const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
    //     checkbox.checked = todos.complete
    //     list.appendChild(templateClone)
        
    
    // }



    function renderTodo(todo) {
        const templateClone = template.content.cloneNode(true)
        const listItem = templateClone.querySelector(".list-item")
        listItem.dataset.todoId = todo.id
        const textElement = templateClone.querySelector("[data-list-item-text]")
        textElement.innerText = todo.name
        const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
        checkbox.checked = todo.complete
        list.appendChild(templateClone)
      }




