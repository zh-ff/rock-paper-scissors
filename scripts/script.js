function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let randomInt = getRandomInt(3); // Expected output: 0, 1 or 2

    switch (randomInt) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "Draw!"
    } else if (playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "scissors") {
        return `You Win! ${playerSelection} beat ${computerSelection}!`;
    } else {
        return `You Lose! ${computerSelection} beat ${playerSelection}!`;
    }
}

function game() {
    let roundsNumber = 5;
    let playerSelection;
    let computerSelection;
    for (let i = 1; i <= roundsNumber; i++) {
        playerSelection = prompt("enter rock, paper or scissors").toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        console.log(`Round ${i}\nPlayer choice: ${playerSelection}\nComputer choice: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();