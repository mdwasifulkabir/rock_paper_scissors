let humanScore = 0;
let computerScore = 0;
let gameOver = false;

//create a new function to get the computer choice
function getComputerChoice() {
    //randomly generate a number between 1 and 3
    const randNum = Math.floor(Math.random()*3) + 1;
    let choice;
    //use the randomly generated number to return rock, paper or Scissors
    switch(randNum){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

//create a new function to get the player's choice
function getPlayerChoice() {
    //ask the user to input the choice
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    //return the choice
    return choice;
}

//create a function to play the entire game
function playGame() {
    
    //create a new function to play a round
    function playRound(humanChoice, computerChoice) {

        const roundResult = document.querySelector("#roundResult");

        //determine the round winner
        if(humanChoice === computerChoice) {
            roundResult.textContent = "It's a draw!";
        }
        else if(humanChoice === "rock") {
            switch(computerChoice) {
                case "paper":
                    computerScore += 1;
                    roundResult.textContent = "You lose! Paper beats Rock";
                    break;
                case "scissors":
                    humanScore += 1;
                    roundResult.textContent = "You win! Rock beats Scissors";
                    break;
            }
        }
        else if(humanChoice === "paper") {
            switch(computerChoice) {
                case "rock":
                    humanScore += 1;
                    roundResult.textContent = "You win! Paper beats Rock";
                    break;
                case "scissors":
                    computerScore += 1;
                    roundResult.textContent = "You lose! Scissors beat Paper";
                    break;
            }
        }
        else if(humanChoice === "scissors") {
            switch(computerChoice) {
                case "rock":
                    computerScore += 1;
                    roundResult.textContent = "You lose! Rock beats Scissors";
                    break;
                case "paper":
                    humanScore += 1;
                    roundResult.textContent = "You win! Scissors beat Paper";
                    break;
            }
        }
    }
    
    const score = document.querySelector("#score");
    const buttons = document.querySelector("#buttons");
    const endResult = document.querySelector("#endResult");
    const retryButton = document.createElement("button");
    retryButton.classList.add("button");
    retryButton.textContent = "Retry";

    buttons.addEventListener("click", (e) => {
        if (!gameOver) {
            let target = e.target;
            const computerChoice = getComputerChoice();
            const humanChoice = target.id;

            playRound(humanChoice, computerChoice);
            score.textContent = "Your score: "+ humanScore+ " Computer score: "+ computerScore;
            
            if (humanScore === 5 || computerScore === 5) {
                gameOver = true;
                document.body.appendChild(retryButton);
                if (humanScore > computerScore) {
                    endResult.textContent = "You won the game!";
                }
                else {
                    endResult.textContent = "You lost the game!";
                }
            }
        }
    });
    
    retryButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        score.textContent = "Your score: 0 Computer Score: 0";
        roundResult.textContent = "Choose Rock, Paper or Scissors to Start the Game!"
        gameOver = false;
        document.body.removeChild(retryButton);
    });
}
score.textContent = "Your score: 0 Computer Score: 0";
playGame();