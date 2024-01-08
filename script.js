const result = document.querySelector('.result');
const computerChoice = document.querySelector('.computer-selection');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});


function playRound(playerSelection, computerSelection) {
    switch (computerSelection) {
        case 'rock':
            computerChoice.textContent = '✊';
            break;
        case 'paper':
            computerChoice.textContent = '🖐';
            break;
        case 'scissors':
            computerChoice.textContent = '✌';
            break;
    }

}

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