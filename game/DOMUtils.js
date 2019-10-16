
function updateOutcomeMessage(outcome) {
    removeGameMessages();

    let outcomeMessage = document.createElement("h2");
    outcomeMessage.classList.add('gameMessage');
    outcomeMessage.textContent = outcome;

    let messageDiv = document.querySelector('#gameMessages');
    messageDiv.appendChild(outcomeMessage);
}

function removeGameMessages() {
    removeAllChildren(document.querySelector('#gameMessages'));
}

function removeAllChildren(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}