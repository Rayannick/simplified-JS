import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, fromUnixTime, getDate, getUnixTime, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from "date-fns"

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButton = document.querySelector(".prev-month-button")
const nextMonthButton = document.querySelector(".next-month-button")
let currentDate = new Date()
const dateGrid = document.querySelector('.date-picker-grid-dates')

datePickerButton.addEventListener('click', () => {
    datePicker.classList.toggle('show')
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);

    setupDatePicker(selectedDate)
    currentDate = selectedDate

})


function setDate(date) {
    datePickerButton.innerText = format(date, "MMMM do , yyyy")
    datePickerButton.dataset.selectedDate = getUnixTime(date)
}


function setupDatePicker(selectedDate) {

    datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
    // setupMonthButtons(selectedDate)
setupDates(selectedDate)

}

function setupDates(selectedDate) {
    const firstWeekStart = startOfWeek(startOfMonth(currentDate))
    const lastWeekend = endOfWeek(endOfMonth(currentDate))
    const dates = eachDayOfInterval({start : firstWeekStart, end : lastWeekend})

    dateGrid.innerHTML= ''
    dates.forEach(date =>{
const dateElement = document.createElement('button')
dateElement.classList.add('date');
dateElement.innerText = date.getDate()
if(!isSameMonth(date,currentDate)){
    dateElement.classList.add('date-picker-other-month-date')
}
if(isSameDay(date,selectedDate)){
    dateElement.classList.add('selected')
}

dateElement.addEventListener('click',()=>{
    setDate(date)
    datePicker.classList.remove('show')
})
dateGrid.appendChild(dateElement)

console.log(selectedDate) //bug
})
}


// function setupMonthButtons(selectedDate) {
nextMonthButton.addEventListener('click', () => {
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);

    console.log('nextbtn')


    currentDate = addMonths(currentDate,1)
    setupDatePicker(selectedDate)
}
    // , { once: true }
)
previousMonthButton.addEventListener('click', () => {
    const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);

    console.log('prevbtn')
    
    currentDate = subMonths(currentDate,1)
    setupDatePicker(selectedDate)
})
// }

setDate(new Date())

