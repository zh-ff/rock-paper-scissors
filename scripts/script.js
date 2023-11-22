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

console.log(getComputerChoice());