console.log('practice 1');

function sum (a,b,callback) {  
    callback(a+b)
}

function result(s){
    console.log(s)
}




sum(55,45,result);

console.log('practice 2');

function printName(anyname,callback) {
    callback('hello Mr. '+anyname)
}

function deliveryMan(package) { 
    console.log(package);
 }


 printName('stylish bandit slayer.',deliveryMan)

// lesson 1 :  hoisting doesn't work on arrow function
// lesson 2: closure.
//start
 
function print(variable) {
   return function func(variable2) {
        console.log(variable + variable2);
    }
  }

  let a = print(1);

  let b = print(2);

  a(4);
  b(8)

//end

// lesson 3 : let is local and var is global.
// lesson 4 : == compare value and === compare value and datatype. false,undefined,null,0,"" ==> same value , different type.
// lesson 5 : objects.
// 'function' word is not needed in object.
// in object, if the key is a variable from somewhere, to access the value through the variable, use [].
let car  = {
    make : 'nissan'
}

const property = 'make';
// console.log(car.property) won't work
console.log(car[property])// will work.

// lesson 5 : reference vs value.
// when variable = value , it referce the value.
//when variable = array/object , it referce the memory address that store the array 
// so when we modifiy the array value though the secondary variable, it change the main value.
let c = {name : 'bla'};
let d = c ;
 d.name = 'bla bla';
 console.log(c)


//  comparison between arrays or object
 let aa = [1,2]
 let bb = [1,2]
 let cc = JSON.stringify(aa)
 let dd = JSON.stringify(bb)
 console.log(aa==bb); // false
 console.log(aa===bb); // false
 console.log(cc==dd); // true
 console.log(cc===dd); // true

//lesson 6 :  array method 

//


// FOREACH  [it doesn't an array]
 const e =[1,2,3,4,5,6,7,8,9]

 e.forEach((number,index,f)=>{  console.log(index+' '+number*f[5]) })// f[] ->To access the array value on which the function is being applied because e is not accessable

 let bal= e.forEach((number,index,f)=>{ return index+' '+number*f[5] })
console.log(bal); // return undefiend.




// MAP[it return an array]

let sal=e.map((number,index,f)=>{return number*2 })
 console.log(sal); //[2, 4, 6, 8, 10, 12, 14, 16, 18]

//  let sal=e.map((number,index,f)=>{return number<=5 })
//  console.log(sal); // it return [true, true, true, true, true, false, false, false, false]




//FILTER[it return an array filtered by comparison ]

 let tal=e.filter((number,index,f)=>{return number<=5 })
 console.log(tal); // return [1, 2, 3, 4, 5]




//  FIND [it return the first value of the array that match a condition ]

let fal=e.find((number,index,f)=>{return number<8 })
 console.log(fal);//return 1



 //SOME [it return true or false if any value match the condition]

 
let saal=e.some((number,index,f)=>{return number<8 })
console.log(saal);//return true



 //SOME [it return true or false if every value match the condition]

  
let eal=e.some((number,index,f)=>{return number>0 })
console.log(eal);//return true



// REDUCE[reduce to single value by any operator]
 const items = [
    {price : 66},
    {price : 11},
    {price : 22},
    {price : 33},
    {price : 44},
    {price : 55}
 ]

 const total = items.reduce((sum,item)=>{ return sum+item.price},1)
 console.log(total);




 //INCLUDES[return true or false if array contain certain value]

 console.log(e.includes(6))


//  lesson 7 : this and new 

function createUser(name,age){
    return{name: name, age: age, human: true}
}

const cUser = createUser('user1',25)
console.log(cUser)
// class and function 
// constructor is type of object that is repeatedly create. use capital letter
//constructor has access to 'this' keyword which reference to the current keyword that is being created.
//constructor function example:
//       1.using function
function Userfunc(name,age){
    this.name = name
    this.age = age
    this.human = true
}
const fUser = new Userfunc('user2',35)
console.log(cUser)

//       2.using class
class Userclass{
    constructor(name,age){
        this.name = name
        this.age = age
        this.human = true
    }
}

const clUser = new Userclass('user3')
console.log(clUser)



// lesson 8 : async vs differ
// in normal method, html parse>js download>js execut>html parsing
// in async method , html parse+js download>js execute>html parsing
// in differ method, html full parse+js downlaod>js executing



// lesson 9 : document
// it allow us to interect with the brower element
// document create
const element = document.createElement('span')
element.innerText = 'this is add with script at the end of the body'
document.body.appendChild(element)  //it will add element at the end of the body.




// lesson 10 : id and class
const divsWithClass = document.getElementsByClassName('many-class');

// if select one of the class,
divsWithClass[0].style.color =  'green'
// if select all class,
const divsWithClassArray= Array.from(divsWithClass)

divsWithClassArray.forEach((text)=>{
    text.style.fontSize ='x-large'  
})



//lesson 11 : query selector 

const dataAttributeElement = document.querySelector('[data-test]')
const divsWithClasses = document.querySelectorAll('.many-class') // it returns an array
const input = document.querySelector('body > input["type=text"]')




//lesson 12 : event listener

var btn = document.getElementById('btn')

function printClick(){
    console.log('stop clicking')
}

btn.addEventListener('click',printClick)
btn.removeEventListener('click',printClick)

// input.addEventListener('change,submit,click,input')
// 'e' reference to the triggered event, it pass an event object. this object is about the event(click,change,input,submit). Object of target,value etc.
btn.addEventListener("input",(e)=>{console.log(e.target.value)})
// 'this' represent the scope you are already inside of(the current scope).

//lesson 13 : data attribute

// data attribute allow us to set and store data in html element .
console.log('hello')
const tests = document.querySelectorAll('[data-test]')
tests.forEach(test => {
        console.log(test.dataset)
})

// project of data attribute
const buttons = document.querySelectorAll('button')

buttons.forEach(button => { 
    button.addEventListener('click',()=>{
     const currentClick = parseInt(button.dataset.click)

     button.dataset.click = currentClick + 1
      console.log(currentClick)
      button.innerText = currentClick
     })
})