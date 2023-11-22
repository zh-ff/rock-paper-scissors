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
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beat paper!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats scissors!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats rock!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beat paper!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats scissors!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats rock!";
    }
    else {
        "Your input is incorrect!";
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