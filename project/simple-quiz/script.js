/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/

const form = document.getElementById('quiz-form')
const answers =Array.from(document.querySelectorAll('.answer')) //query gives us string/ irretable obj. it will return an array for filter method
const questions = document.querySelectorAll('.question-item')
const congrats = document.getElementById('good_alert')
const warning = document.getElementById('bad_alert')







// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener('submit',(e)=>{


  //    1. Prevent the default behaviour
e.preventDefault()
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)


questions.forEach(n => {
  n.classList.add('incorrect')
})


const checkedAns = answers.filter(n => n.checked)
checkedAns.forEach(n=> {
  const checkedQuestion = n.closest('.question-item')

  if (n.value === "true"){
    checkedQuestion.classList.add('correct')
    checkedQuestion.classList.remove('incorrect')
  }else{
    checkedQuestion.classList.add('incorrect')
  }
  const allTrue = checkedAns.every(answer => answer.value ==='true')// return boolean
  const allAnswered = checkedAns.length === questions.length

  if(allTrue && allAnswered) {
    congrats.classList.add('active')
    setTimeout(function(){
      congrats.classList.remove('active')
    },3000)
  }else{
    warning.classList.add('active')
    setTimeout(function(){
      warning.classList.remove('active')
    },3000)
  }
})
})
  
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
