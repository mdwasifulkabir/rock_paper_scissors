//create a new function to get the computer choice
function getComputerChoice() {
    //randomly generate a number between 1 and 3
    const randNum = Math.floor(Math.random()*3) + 1;
    let choice;
    //use the randomly generated number to return rock, paper or scissor
    switch(randNum){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissor";
            break;
    }
    return choice;
}
console.log(getComputerChoice());
