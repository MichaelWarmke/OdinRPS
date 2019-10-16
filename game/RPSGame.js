const inputOptions = Array("rock", "paper", "scissors");    
let playerScore = 0;
let computerScore = 0;
let matchWinner = "";

function computerPlay() { 
    return inputOptions[Math.floor(Math.random()*inputOptions.length)];
}

function determineRoundWinner(playerSelection, computerSelection) {
    let doesPlayerWin = inputOptions.indexOf(computerSelection.toLowerCase()) == (inputOptions.indexOf(playerSelection.toLowerCase()) - 1);
    let isTie = inputOptions.indexOf(computerSelection.toLowerCase()) == inputOptions.indexOf(playerSelection.toLowerCase());

    if(doesPlayerWin) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (isTie) {
        return `It's a Tie. ${playerSelection} and ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound(userSubmission) {

    let computerSubmission = computerPlay();

    console.log(`Player Choice: ${userSubmission}`);
    console.log(`Computer Choice: ${computerSubmission}`);

    let outcome = determineRoundWinner(userSubmission, computerSubmission);
    
    if (outcome.startsWith("You Win!")) { playerScore++; }
    if (outcome.startsWith("You Lose!")) { computerScore++; }    

    console.log(outcome);
    
    if (isGameOver()) {
        matchWinner = determineMatchWinner();
    }

    return outcome;
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    matchWinner = "";
}

function getGameState() {
    return {Computer: computerScore, Player: playerScore, MatchWinner: matchWinner};
}

function isGameOver() {
    return playerScore > 4 || computerScore > 4;
}

function determineMatchWinner() {
    if (playerScore > 4) { return "Player"; }
    else if (computerScore > 4) { return "Computer"; }
    else { return ""; }
}
