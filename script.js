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

const section = document.querySelector('section'); // section with buttons
const playerSelectionText = document.querySelector('#player-selection');
const computerSelectionText = document.querySelector('#computer-selection');
const roundResults = document.querySelector('#round-results');

section.addEventListener('click', event => {
    if (playerScore < 5 && computerScore < 5) {
        let playerSelection = event.target.textContent.toLowerCase();
        if (event.target.nodeName != 'BUTTON') {
            return;
        }
        let computerSelection = computerPlay();
        computerSelectionText.textContent = `Computer choice is ${computerSelection}`;

        playerSelectionText.textContent = `Player choice is ${playerSelection}`;
        console.log(playRound(playerSelection, computerSelection));
        //console.log(playerScore);
    } else {
        roundResults.textContent = decideTheWinner(playerScore, computerScore);
        console.log('yes');
    }

})



