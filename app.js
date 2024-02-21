// Get DOM Elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startBtn = document.querySelector(".start-btn");
let newCardBtn = document.querySelector(".new-card-btn");
let playerEl = document.getElementById("player-el");

// Array for displayed messages
let messages = [
    "Want to play a round?",
    "Great!",
    "You got a blackjack!",
    "Bad cards, you lose!",
];

// Initialize the sum and money
let sum = 0;
let money = 500;

// Booleans for game status
let hasBlackjack = false;
let hasLost = false;

// Array to store generated random cards
let cardsOnHand = [];

// Generate two random cards
function startGame() {
    // Reset game status
    hasLost = false;
    hasBlackjack = false;

    // Clear cards on hand
    cardsOnHand = [];

    // Generate two random cards
    let card1 = Math.floor(Math.random() * 13) + 1;
    let card2 = Math.floor(Math.random() * 13) + 1;

    // Add cards to array
    cardsOnHand.push(card1, card2);

    // Calculate sum
    sum = card1 + card2;

    // Update displayed cards
    updateCardsDisplayed();

    // Display sum
    sumEl.innerText = sum;

    // Check game outcome
    checkTotalSum();
}

// Add 1 card to the array after each click
function newCard() {
    // Ignore if game over
    if (hasLost || hasBlackjack) {
        return;
    }

    // Generate one random card
    let card3 = Math.floor(Math.random() * 13) + 1;

    // Add card to array
    cardsOnHand.push(card3);

    // Update sum
    sum += card3;

    // Update displayed cards
    updateCardsDisplayed();

    // Display sum
    sumEl.innerText = sum;

    // Check game outcome
    checkTotalSum();
}

// Update displayed cards
function updateCardsDisplayed() {
    cardsEl.innerText = cardsOnHand.join(" ");
}

// Check total sum and update message
function checkTotalSum() {
    if (sum <= 20) {
        messageEl.innerText = messages[1];
        money += 5;
    } else if (sum === 21) {
        messageEl.innerText = messages[2];
        money += 100;
        hasBlackjack = true;
    } else {
        messageEl.innerText = messages[3];
        money -= 50;
        hasLost = true;
    }
    // Update money display
    playerEl.innerText = money;
}
