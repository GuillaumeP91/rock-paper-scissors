console.log ("Hello Worldie")

const body = document.querySelector("body");

const scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = "Score -> Human: 0, Computer: 0";
body.appendChild(scoreDisplay);

const resultsLog = document.createElement("div");
resultsLog.textContent = "First to 5 points wins! Click a button to play.";
resultsLog.style.marginTop = "20px";
resultsLog.style.fontWeight = "bold";
body.appendChild(resultsLog);

function getComputerChoice () {
    let computerChoice = Math.random();

    if (computerChoice >= 0.67) {
        return "rock";
    } else if (computerChoice <= 0.33) {
        return "paper";
    } else {return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    
    humanChoice = humanChoice.toLowerCase();

    let message = "";

    if (humanChoice === computerChoice) {
        message = `It's a tie ! Both chose ${humanChoice}`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = `You win ! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message = `You lose ! ${computerChoice} beats ${humanChoice}`;
    }
    resultsLog.textContent = message;
    scoreDisplay.textContent = `Score -> Human: ${humanScore}, Computer: ${computerScore}`;
   
    if (humanScore === 5) {
        resultsLog.textContent = "CONGRATS! You won the match!";
        resultsLog.style.color = "green";
    } else if (computerScore === 5) {
        resultsLog.textContent = "GAME OVER! The computer won.";
        resultsLog.style.color = "red";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(){
        const humanSelection = button.textContent;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    });
});
