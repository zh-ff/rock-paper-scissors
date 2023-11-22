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

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beat paper!";
        } else if (computerSelection == "rock") {
            return "You Lose! Rock beats scissors!";
        } else {
            return "Draw!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats rock!";
        } else if (computerSelection == "scissors") {
            return "You Lose! Scissors beat paper!";
        } else {
            return "Draw!";
        }
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats scissors!";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats rock!";
        } else {
            return "Draw!";
        }
    } else {
        "Your input is incorrect!";
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt("enter rock, paper or scissors").toLowerCase();
        computerSelection = getComputerChoice().toLowerCase();
        console.log(`Round ${i}\nPlayer choice: ${playerSelection}\nComputer choice: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();