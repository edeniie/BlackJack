let firstCard = 10
let secondCard =1
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " , " + secondCard
    sumEl.textContent = "sum: " + sum
    
    if (sum<= 20) {
        message = "Do u want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        message = "Out of game!"
        isAlive = false
    }
    messageEl.textContent = message
}
