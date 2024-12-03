const addCartBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count  = 1

addCartBtn.addEventListener('click', ()=>{
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})