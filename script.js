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

// A function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0;
    let roundMessage = '';

    if (playerSelection === computerSelection) {
        roundMessage = 'Tie!';
        playerScore += 0.5;
        computerScore += 0.5;

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundMessage = 'You Win! Rock crushes scissors.';
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundMessage = 'You Win! Paper beats rock.';
        playerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundMessage = 'You Win! Scissors cuts paper. ';
        playerScore += 1;
    } else {
        roundMessage = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore += 1;
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

// A 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt('Choose: rock, paper or scissors.').toLowerCase(); // Get input from the user.
        computerSelection = computerPlay(); // Random choice of computer.
        let round = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}\n${round[2]}\nPlayer score: ${playerScore += round[0]} Computer score: ${computerScore += round[1]}`);
    }
    console.log(decideTheWinner(playerScore, computerScore));
}

// Rock paper scissors vs Computer!
game();


