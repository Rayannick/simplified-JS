document.addEventListener('click', (e)=>{
    if(!e.target.matches('.expand-button')) return
    const card =e.target.closest('.card')
    const cardBody = card.querySelector('.card-body')
     
    cardBody.classList.toggle('show')

    e.target.innerText = e.target.innerText === 'expand' ? 'collapse' : 'expand'

    if(e.target.innerText === 'expand'){

        e.target.innerText = 'collapse'
    }else{
        e.target.innerText = 'expand'
    }
})



