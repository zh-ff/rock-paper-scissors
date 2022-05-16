// A function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay() {
    const shapeName = Math.floor(Math.random() * 3);
    switch (shapeName) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
let playerScore = 0;
let computerScore = 0;
// A function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    let roundMessage = '';

    if (playerSelection === computerSelection) {
        roundMessage = 'Tie!';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundMessage = 'You Win! Rock crushes scissors.';
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundMessage = 'You Win! Paper beats rock.';
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundMessage = 'You Win! Scissors cuts paper. ';
        playerScore++;
    } else {
        roundMessage = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }
    return [playerScore, computerScore, roundMessage];
}

// Decide the winner
function decideTheWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return 'Player Wins!';
    } else if (computerScore > playerScore) {
        return 'Computer Wins!';
    } else {
        return 'Tie!';
    }
}

const buttons = document.querySelectorAll('.btn');
const playerSelectionText = document.querySelector('#player-selection');
const computerSelectionText = document.querySelector('#computer-selection');
const roundResultsDiv = document.querySelector('#round-results');
const roundResultsPara = document.createElement('p');

let roundResults;
let gameResults;
let roundCounter = 1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            // for clicks outside buttons
            if (button.nodeName != 'BUTTON') {
                return;
            }

            let playerSelection = button.textContent.toLowerCase();
            let computerSelection = computerPlay();
            //const roundResultsPara = document.createElement('p');

            // Play round and get results array
            roundResults = playRound(playerSelection, computerSelection);

            computerSelectionText.textContent = `Computer choice is ${computerSelection}`;
            playerSelectionText.textContent = `Player choice is ${playerSelection}`;
            roundResultsPara.setAttribute('id', 'round-' + roundCounter);

            roundResultsPara.textContent = `Round ${roundCounter} Player score: ${roundResults[0]} Computer score: ${roundResults[1]} ${roundResults[2]}`;
            roundResultsDiv.appendChild(roundResultsPara);

            roundCounter++;

        } else {
            gameResults = decideTheWinner(playerScore, computerScore); // Get game winner
            const gameResultsPara = document.createElement('p');
            gameResultsPara.textContent = `${gameResults}`;
            roundResultsDiv.appendChild(gameResultsPara);
        }
    })

})