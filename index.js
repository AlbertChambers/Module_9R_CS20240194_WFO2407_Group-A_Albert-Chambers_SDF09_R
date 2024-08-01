let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Albert",
    chips: 150
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNum = Math.ceil( Math.random()*13 )
     if (randomNum > 10) {
        return 10
    } else if (randomNum === 1) {
        return 11
    } else {
        return randomNum
    }
}

function startGame() {
    let isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
};

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
};

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
};
