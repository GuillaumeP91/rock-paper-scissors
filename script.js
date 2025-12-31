console.log ("Hello Worldie")

function getComputerChoice () {
    let result = Math.random();
    console.log(result);
    if (result >= 0,67) {
        return "rock"
    }
    if (result <= 0,33) {
        return "paper"
    }
    else return "scissors"
}


function getHumanChoice () {
    prompt("Rock, Paper or Scissors ?")
    console.log(prompt)
}

let humanScore = 0;
let computerScore = 0;

function playGame () {
function playRound (humanChoice, computerChoice) {
    const humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log ("It's a tie ! Both chose ${humanChoice}");
    }

    if (
        (humanChoice === "rock" && computerChoice === "schissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win ! ${humanChoice} beats ${computerChoice}");
        humanScore++;
        console.log(humanScore);
    } else {
        console.log("You lose ! ${computerChoice} beats ${humanChoice}");
        computerScore++;
        console.log(computerScore);
    }
    for (let i = 0; i < 5; i++) {
    playRound();
    }
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



