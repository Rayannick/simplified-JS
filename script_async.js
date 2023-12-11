// this is callback hell
setTimeout(() => {
    console.log('first one');
    setTimeout(() => {
        console.log('second one');
        setTimeout(() => {
            console.log('third one')
        }, 1000);
    }, 1000);
}, 1000);


// this is promise 

// exp 1 : 
const promise = new Promise((resolve,reject)=>{
    const sum = 1 + 3;
    if(sum === 2){
        resolve('success')
    }else{
        reject('error')
    }
})



promise.then(message=>{ //this is for success . take value from resolve function and execute as a next step.
console.log(message)
}).catch(message=>{ //this is for failure . take value from reject function and execute as a next step
    console.log(message)
})






function setTimeoutPromise (duration) { 
    return new Promise((resolve,reject)=>{ //this resolve/reject function is like my result was successful/failure. 
        setTimeout(resolve, duration);
    })
 }
 
 setTimeoutPromise(1000)
 .then(()=>{
    console.log('1')
    return setTimeoutPromise(1000);
 })
 .then(()=>{
    console.log('2');
    return setTimeoutPromise(1000)
 })
 .then(()=>{
    console.log('3')
 })



 console.log('first one is the sync function')

// exp 3


const button1 = document.querySelector('.button')
const button2 = document.querySelector('.button2')

 
function addEventListenerPromise(element,method){
    return new Promise((resolve,reject)=>{
        element.addEventListener(method,resolve)
    })
}  



addEventListenerPromise(button1,'click').then(e=>{
    console.log('First one clicked')
}).catch(()=>{
    console.log('something unexpected happend')
})

addEventListenerPromise(button2,'click').then(e=>{
    console.log('second one clicked')
})




// lesson : promise all,promise any, promise race, promise settled, finally)

Promise.all([ //to run multiple promises at the same time, if every promises success . it is useful on settimeout function
    Promise.resolve('first one'),
    Promise.resolve('second one'),
    Promise.resolve('third one')
])
.then(message =>{
    console.log(message)
}).catch(error=>{console.error(error)})

Promise.any([ // to run on any promises success.
Promise.resolve('first one'),
Promise.resolve('second one'),
Promise.resolve('third one')
])
.then(message =>{
console.log(message)
}).catch(error=>{console.error(error)})

Promise.race([ // first one to success
Promise.resolve('first one'),
Promise.resolve('second one'),
Promise.resolve('third one')
])
.then(message =>{
console.log(message)
}).catch(error=>{console.error(error)})


Promise.allSettled([ // return array of promise value both resolve or reject
Promise.resolve('first one'),
Promise.resolve('second one'),
Promise.resolve('third one')
])
.then(message =>{
console.log(message)
}).catch(error=>{console.error(error)})


// async await

function setTimeoutPromise2(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('you waited')
        },  delay);
    })
}