function getComputerChoice() {
    const randomChoice = Math.floor (Math.random() * 3);


if (randomChoice === 0) {
    return 'Rock';
}
else if (randomChoice === 1) {
    return 'Paper';
}
else if (randomChoice === 2) {
    return 'Scissors';
}
}

function getHumanChoice () {
    const humanChoice = prompt ('Enter Rock, Paper, or Scissors');
    return humanChoice;
}

function playGame () {

let humanScore = 0;
let computerScore= 0;

function playRound (humanChoice, randomChoice) {
    const human = humanChoice.toLowerCase();
    const computer= randomChoice.toLowerCase();

    if (human === computer) {
        console.log('Tie Game');
    }

    else if (
        (human === 'rock' && computer === 'scissors') ||
        (human === 'scissors' && computer === 'paper') ||
        (human === 'paper' && computer === 'rock')
    ) {
        humanScore++;
        console.log('You win this time')
    }

    else {
        computerScore++;
        console.log('You lost cuh');
    }
}
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log ('You win bro');
    } else if (computerScore > humanScore) {
        console.log ('Lost to computer')
    } else {
        console.log ('Tie game')
    }
}
playGame ();