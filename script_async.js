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


const button = document.querySelector('.button')
 
function addEventListenerPromise(element,method){
    return new Promise((resolve,reject)=>{
        element.addEventListener(method,resolve)
    })
}  



addEventListenerPromise(button,'click').then(e=>{
    
})