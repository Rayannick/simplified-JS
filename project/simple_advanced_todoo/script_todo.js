const form = document.querySelector("#new-todo-form")
const input = document.querySelector("#todo-input")











form.addEventListener("submit", e => {
    e.preventDefault()

    const todoValue = input.value;

    console.log(todoValue)

})