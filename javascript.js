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
    let humanScore = 0;
    let computerScore = 0;
    
    //create a new function to play a round
    function playRound(humanChoice, computerChoice) {

        const roundResult = document.querySelector("#roundResult");

        //determine the round winner
        if(humanChoice === computerChoice) {
            roundResult.textContent = "It's a draw!";
        }
        if(humanChoice === "rock") {
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

    buttons.addEventListener("click", (e) => {
        let target = e.target;
        const computerChoice = getComputerChoice();
        const humanChoice = target.id;

        playRound(humanChoice, computerChoice);
        score.textContent = "Your score: "+ humanScore+ " Computer score: "+ computerScore;

        if (humanScore == 5 || computerScore == 5) {
            if (humanScore > computerScore) {
                endResult.TextContent = "You won the game!";
            }
            else if (humanScore < computerScore) {
                endResult.textContent = "You lost the game!";
            }
        }
    });
}
score.textContent = "Your score: 0 Computer Score: 0";
playGame();