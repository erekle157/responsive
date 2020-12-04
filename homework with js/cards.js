const array = [
    {img1: './images2/Rectangle451.svg',span:'UI Components for Unity Gaming'}
    ,{img1: './images2/Rectangle46.svg',span:'Analytics Mobile App – Blurr Series'}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Dark-mode – Task Management App'}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Dark-mode – Task Management App'}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Dark-mode – Task Management App'}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Dark-mode – Task Management App'}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Dark-mode – Task Management App'}
    ]

function jscards(cards) {
    const cardsContainer = document.getElementById('main-cards')
    for (let i = 0; i < cards.length; i++) {
        const curentCard = cards[i];
        const createCard = document.createElement('div')
        createCard.classList.add('cards')
        createCard.innerHTML =
        `                                 
            <img src=${curentCard.img1} alt="">
            <div class="div-2">
            <img class="icons" src="./images2/Component 10 – 1.svg" alt="">
                </div>
                <div class="div-22">
                    <img class="icons" src="./images2/Heart.svg" alt="">
                </div>
            <div class="card-span">    
             <span>${curentCard.span}</span>
            </div>        
        `
    cardsContainer.appendChild(createCard)
    }
}    
jscards(array)
