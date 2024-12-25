// Get references to DOM elements
const dice = document.getElementById('dice');
const rollButton = document.getElementById('roll-button');
const resultText = document.getElementById('result');

// Function to roll the dice
function rollDice() {
    // Generate a random number between 1 and 6
    const diceValue = Math.floor(Math.random() * 6) + 1;

    // Update the dice image
    dice.src = `assets/dice${diceValue}.png`;

    // Update the result text
    resultText.textContent = `Result: ${diceValue}`;
}

// Add event listener to the roll button
rollButton.addEventListener('click', rollDice);
