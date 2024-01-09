const result = document.querySelector('.result');
const computerChoice = document.querySelector('.computer-selection');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let rockSelected = () => {playRound('rock', getComputerChoice())};
let paperSelected = () => {playRound('paper', getComputerChoice())};
let scissorsSelected = () => {playRound('scissors', getComputerChoice())};

rock.addEventListener('click', rockSelected);
paper.addEventListener('click', paperSelected);
scissors.addEventListener('click', scissorsSelected);


let playerScore = 0;
let computerScore = 0;

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

    const playerWin = (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper');
    const computerWin = (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock');

    if (playerWin) {
        ++playerScore;
    } else if (computerWin) {
        ++computerScore;
    }
    game();
}

function game() {

    result.textContent = 'Computer: ' + computerScore + '     ' +
        'Player: ' + playerScore;

    if (playerScore === 3) {
        result.textContent += '\nYou Win!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        result.textContent += '\nYou Lose!';
        playerScore = 0;
        computerScore = 0;
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