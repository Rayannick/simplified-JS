import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, fromUnixTime, getUnixTime, startOfMonth, startOfWeek, subMonths } from "date-fns"

const datePickerButton = document.querySelector('.date-picker-button')
const datePicker = document.querySelector('.date-picker')
const datePickerHeaderText = document.querySelector('.current-month')
const previousMonthButton = document.querySelector(".prev-month-button")
const nextMonthButton = document.querySelector(".next-month-button")
let currentDate = new Date()

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


function setupDatePicker() {

    datePickerHeaderText.innerText = format(currentDate, 'MMMM - yyyy')
    // setupMonthButtons(selectedDate)


}

function setupDates(selectedDate) {
    const firstWeekStart = startOfWeek(startOfMonth(currentDate))
    const lastWeekend = endOfWeek(endOfMonth(currentDate))
    const dates = eachDayOfInterval({start : firstWeekStart, end : lastWeekend})

    dates.forEach(date =>{
        console.log(date)
    })
}


// function setupMonthButtons(selectedDate) {
nextMonthButton.addEventListener('click', () => {
    
    console.log('nextbtn')


    currentDate = addMonths(currentDate,1)
    setupDatePicker()
}
    // , { once: true }
)
previousMonthButton.addEventListener('click', () => {

    console.log('prevbtn')
    
    currentDate = subMonths(currentDate,1)
    setupDatePicker()
})
// }

setDate(new Date())

