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


// lesson : async await

function getValueWithDealy(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`you waited ${delay} millisecond.`)
        },  delay);
    })
}

function getValueWithDealyError(delay){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`you wasted ${delay} millisecond`)
        }, delay);
    } )
}
// method : 1

getValueWithDealy(2000).then(message =>{
    console.log(message)
    console.log('first')
})
.then(message=>{
    console.log(message)
    console.log('second')
})


// method : 2

async function dostuff(){
   try{
    console.log('before error')
    await getValueWithDealy(250)
    console.log('after error')
} catch(error){
    console.log('here')
    console.log(error)
} finally{
    console.log('finally happen without depend on reject/resolve')
}
}

dostuff()


// exemple 02: difference btn async/await VS .then/.catch

function getValueWithDealy2(name,delay){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(name)
        },delay)
    })
}

async function dostuff2(){ //1000+1500+2000 millisecond
    try{
        const value1 = await getValueWithDealy2('Ami',1000)
        console.log(value1);
        const value2 = await getValueWithDealy2('jokhon',1500)
        console.log(value2);
        const value3 =await getValueWithDealy2('thakbo na',2000)
        console.log(value3);
        
        
    }catch(e){
        console.log(e)
    }
}

//2500 millisecond
getValueWithDealy2('ki',2500).then(m => console.log(m))
getValueWithDealy2('korbi re',2500).then(m => console.log(m))
getValueWithDealy2('booka?',2500).then(m => console.log(m))
dostuff2()


// more exemple
// method : 1 (async/await)
async function dd(){
    for(let i=0;i<10;i++){
const value = await getValueWithDealy2(i,2000)
console.log(value)

    }
}
dd()

// method : 2 (.then.catch)
for(let i=0;i<20;i++){ //it doesn't follow the wait. all value wait for 2000
getValueWithDealy2(i,2000).then(m => console.log(m))
}











