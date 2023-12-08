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




 console.log('this is the sync function')