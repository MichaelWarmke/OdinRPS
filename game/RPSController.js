
function startGame() {
    addEventListeners();
    newGame();
    removeGameMessages();
    updateScore(getGameState());
}

function endGame() {
    console.log("Game over");
    removePlayingOptions();
    displayRestartButton();
}

function updateScore(scoreMap) {

    let opponentScore = document.querySelector('#oppScore');
    let playerScore = document.querySelector('#playerScore');

    console.log(scoreMap);
    console.log(`Updating Player Score to ${scoreMap.Player}`);
    console.log(`Updating Computer Score to ${scoreMap.Computer}`);

    opponentScore.textContent = scoreMap.Computer;
    playerScore.textContent = scoreMap.Player;

    if (scoreMap.MatchWinner !== "") {
        endGame();
    }
}

function clickCallback(element) {
    console.log(`Submitting Option: ${element.target.id}`);
    
    let outcome = playRound(element.target.id);
    updateOutcomeMessage(outcome);
    updateScore(getGameState());
}

function addEventListeners() {

    let gameOptions = document.querySelectorAll('img');

    gameOptions.forEach((option) => {
        console.log(`Found Option: ${option.id}`)
        let optionElement = document.querySelector(`#${option.id}`)

        optionElement.addEventListener('click', clickCallback);
        optionElement.addEventListener('mousedown', toggleButtonEffect);
        optionElement.addEventListener('mouseup', toggleButtonEffect);
        optionElement.addEventListener('mouseenter', toggleButtonHover);
        optionElement.addEventListener('mouseleave', toggleButtonHover);
    });


}

function toggleButtonEffect(event) {
    event.target.classList.toggle("buttonEffect");
}

function toggleButtonHover(event) {
    event.target.classList.toggle("buttonHover");
}

function removePlayingOptions() {
    let playerOptions = document.querySelectorAll('img');

    playerOptions.forEach((option) => {
        option.removeEventListener('click', clickCallback);
        option.removeEventListener('mousedown', toggleButtonEffect);
        option.removeEventListener('mouseup', toggleButtonEffect);
        option.removeEventListener('mouseenter', toggleButtonHover);
        option.removeEventListener('mouseleave', toggleButtonHover);
    });
}

function displayRestartButton() {
    removeGameMessages();
    let messageDiv = document.querySelector("#gameMessages");

    let restartGame = document.createElement("button");
    restartGame.classList.add("restartButton");
    restartGame.textContent = "Restart Game";
    restartGame.addEventListener('click', () => {
        startGame();
    });

    messageDiv.appendChild(restartGame);
}   

