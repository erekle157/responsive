const array = [
    {img1: './images2/Rectangle451.svg',span:'UI Components for Unity Gaming App design', category: "App design"}
    ,{img1: './images2/Rectangle46.svg',span:' Mobile App – Blurr Series Web design', category: "Web design"}
    ,{img1: './images2/Rectangle47.svg',span:'Est– Task Management App 3D', category: "3D"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Task Management App Web design', category: "Web design"}
    ,{img1: './images2/Rectangle48.svg',span:'Estaro –  – Task Management App 3D', category: "3D"}
    ,{img1: './images2/Rectangle47.svg',span:'EstaroManagement App App design', category: "App design"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Task Management App Animation', category: "Animation"}
    ,{img1: './images2/Rectangle481.svg',span:'Estar – Task Management App Web design', category: "Web design"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – D– Task Management App 3D', category: "3D"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro  Task Management App Animation', category: "Animation"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – agement App App design', category: "App design"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro  Task Management App Animation', category: "Animation"}
    ,{img1: './images2/Rectangle47.svg',span:'Estare – Task Management App Web design', category: "Web design"}
    ,{img1: './images2/Rectangle47.svg',span:'Estaro – Da – Task Management App 3D', category: "3D"}
    ,{img1: './images2/Rectangle47.svg',span:'Es– Task Management App Animation', category: "Animation"}  
    ]


const liItem = document.getElementById("filter-a")
const imgItem = array.category





const callbackfn = (item) => item.category === '3D'

    const result = array.filter(callbackfn)
    
    console.log(result)



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




const content = document.getElementById('main-cards')
const button = document.getElementById("h2")

button.onclick = function (){
    if(content.className == "open"){
        content.className = "";
        button.innerHTML = "loan more";
    } else {
        content.className = "open";
        button.innerHTML = "loan less";
    }
}

