let computerScore = 0;
let playerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const playerSelectionDisplay = document.getElementById("playerSelection");
const computerSelectionDisplay = document.getElementById("computerSelection");
const announcement = document.querySelector(".announcement");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * choices.length);
    
    return choices[randNum];
}
// Make it so lose is true or false, then print out statement with corresponding choices
function playRound(event) {
    const playerSelection = event.target.value;
    const computerSelection = getComputerChoice();
    let lose = null;
    
    playerSelectionDisplay.innerText = playerSelection;
    computerSelectionDisplay.innerText = computerSelection;

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            lose = true;
        } else if (computerSelection == "scissors") {
            lose = false;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            lose = true;
        } else if (computerSelection == "rock") {
            lose = false;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            lose = true;
        } else if (computerSelection == "paper") {
            lose = false;
        }
    }
//Scope issue here, scores not defined
    if (lose === true) {
        computerScore++;
    } else if (lose === false) {
        playerScore++;
    }

    if (playerScore >= 5) {
        announcement.innerText = "You win! You scored " + playerScore + " points!";
    } else if (computerScore >= 5) {
        announcement.innerText = "You lose :( You scored " + playerScore + " point(s)";
    }

    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", playRound);
});