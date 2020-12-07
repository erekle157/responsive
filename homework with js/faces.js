const array2 = [
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
    {img:'./images2/faces/Rectangle65.svg', span:'Tran Mau <br />Tri Tam', span2:'Sai Gon, Vietnam', btn:'following'},
]




function jsfaces(cards) {
    const facesContainer = document.getElementById('faces')
    for (let i = 0; i < cards.length; i++) {
        const curentface = cards[i];
        const createface = document.createElement('div')
        createface.classList.add('cards')
        createface.innerHTML =
        `                                 
            <img src="${curentface.img}" alt="">
                
            <div class="card-span centre">    
                <span>${curentface.span} </span>
            </div>   
            <div class="card-span centre">    
                <span class="opasity">${curentface.span2}</span>
            </div> 
            <button class="bott centre">>${curentface.btn}</button>
        `
    facesContainer.appendChild(createface)
    }
}    
jsfaces(array2)


