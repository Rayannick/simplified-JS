// hold on form for submitting the event
const form = document.querySelector('#new-item-form')
// hold on input field field for use the value to create the list
const input = document.querySelector('#item-input')
// hold on item-list
const list = document.querySelector('#list')
// creating an event for submiting the form
form.addEventListener('submit',(e) =>{
    e.preventDefault();

    // creating an item
    const item = document.createElement('li');
    // add class on the list
    item.classList.add('list-item')
    // put value on the list
    item.innerText = input.value
    // add on the list
    list.appendChild(item)
    // empty the input field
    input.value = ''
    // remove the item by click.
    item.addEventListener('click',()=>{
        item.remove()
    })

})

