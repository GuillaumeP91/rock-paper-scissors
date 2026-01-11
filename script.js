console.log ("Hello Worldie")

function getComputerChoice () {
    let computerChoice = Math.random();

    if (computerChoice >= 0.67) {
        return "rock";
    } else if (computerChoice <= 0.33) {
        return "paper";
    } else {return "scissors";
    }
}

function getHumanChoice () {
    let humanChoice = prompt("Rock, Paper or Scissors ?");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log (`It's a tie ! Both chose ${humanChoice}`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}


playGame();





