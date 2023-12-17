const URL1 = 'https://jsonplaceholder.typicode.com/users';
const button = document.querySelector('button')

button.addEventListener('click',doStuff)

async function doStuff(){ 
    try{
        const response = await fetch(URLd1)
        if(response.ok){
            // notice the difference

            // const users = response.json()
            const users = await response.json()
            console.log(users.name)
        }else{
            console.log('kon baler user?? Database e nai') // it will give error for the api
        }
    
    }catch(e){
        console.log('errrrrarr') //it will give error for the function
    }
 }