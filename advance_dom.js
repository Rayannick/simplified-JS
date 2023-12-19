const URL1 = 'https://jsonplaceholder.typicode.com/posts';
const button = document.querySelector('.button')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')

button.addEventListener('click',doStuff)
button2.addEventListener('click',doStuff2)
button3.addEventListener('click',doStuff3)




// // Getting data through api




//  method 1
function doStuff(){
fetch(URL1).then(resp =>{
    return resp.json()
}).then(data =>{
    console.log(data.map(user => user.name))
})

}

// method 2
async function doStuff2(){ 
    try{
        const response = await fetch(URL1)
        if(response.ok){


            // notice the difference

            // const users = response.json()
            const users = await response.json()
            console.log(users)
        }else{
            console.log('kon baler user?? Database e nai') // it will give error for the api
        }
    
    }catch(e){
        console.log('errrrrarr') //it will give error for the function
    }
 }





// Posting data through api

async function doStuff3(){
    const response = await fetch(URL1,{
        method: "POST",
        headers:{
            
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            title: 'New POSssssssssssssssst'
        })
    })
    const post = await response.json()
    console.log(post)
} 






// Lesson : Cookie Session LocalStorage

localStorage.setItem('name','kibrya') //never expire , for client , 10MB
sessionStorage.setItem('age','25') //expire on tab close , for client , 5MB

// localStorage.removeItem('name')
// sessionStorage.removeItem('age')


// cookies are different.

const date = new Date(9999,0,1).toUTCString() //for never expire the cookies
const expired_date = new Date(1999,0,1).toUTCString()//for remove cookies
document.cookie = `name=kibrya; expires=${date}`//manual expire , client/server , 4KB
console.log(document.cookie)
document.cookie = `name=;expire=${expired_date}`