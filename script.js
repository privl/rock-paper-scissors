function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    let computerSelection;

    switch (random) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    
}