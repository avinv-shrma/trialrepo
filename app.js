const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.png',
    },
    {
        name: 'papaya',
        img: 'images/papaya.png',
    },
    {
        name: 'orange',
        img: 'images/orange.png',
    },
    {
        name: 'pear',
        img: 'images/pear.png',
    },
    {
        name: 'strawberry',
        img: 'images/strawberry.png',
    },
    {
        name: 'avocado',
        img: 'images/avocado.png',
    },
    {
        name: 'kiwi',
        img: 'images/kiwi.png',
    },
    {
        name: 'grapes',
        img: 'images/grapes.png',
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.png',
    },
    {
        name: 'banana',
        img: 'images/banana.png',
    }
]
git


console.log(cardArray)

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')

const resultDisplay = document.querySelector('#result')


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/cover.png');
        card.setAttribute('data-id', i);
        // card.addEventListener('click', flipCard); // Uncomment this line if flipCard is defined
        gridDisplay.appendChild(card);
    }
}

createBoard()

// function checkForMatch() {
//     const cards = document.querySelectorAll('img')
//     const optionOneID = carChosenId[0]
    
// }



function flipCard(){
    
}