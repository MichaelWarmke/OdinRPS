
function updateScore(scoreMap) {

    let opponentScore = document.querySelector('#oppScore');
    let playerScore = document.querySelector('#playerScore');

    console.log(scoreMap);
    console.log(`Updating Player Score to ${scoreMap.Player}`);
    console.log(`Updating Computer Score to ${scoreMap.Computer}`);

    opponentScore.textContent = scoreMap.Computer;
    playerScore.textContent = scoreMap.Player;

}

function addEventListeners() {

    let gameOptions = document.querySelectorAll('img');

    gameOptions.forEach((option) => {
        console.log(`Found Option: ${option.id}`)
        let optionElement = document.querySelector(`#${option.id}`)

        optionElement.addEventListener('click', (e) => {
            console.log(`Submitting Option: ${e.target.id}`);
            submitOption(e.target.id);
        });
    });

}

function startGame() {
    newGame()
    updateScore(getGameState());
}

function submitOption(option) {
    playRound(option);
    updateScore(getGameState());
}