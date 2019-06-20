function solve() {
    let imageCollection = Array.from(document.getElementsByTagName('img'));
    imageCollection = imageCollection.forEach((img) => { img.addEventListener('click', clickEvent) });

    function clickEvent(e) {
        let card = e.target;
        card.src = './images/whiteCard.jpg';
        card.removeEventListener('click', clickEvent);

        let parent = card.parentNode;

        let spans = document.getElementById('result').children;

        let parentId = parent.id;
        if (parentId === 'player1Div') {
            let resultLineUpperCards = spans[0];
            let cardName = card.name;
            resultLineUpperCards.textContent = cardName;
        } else if (parentId === 'player2Div') {
            let resultLineLowerCards = spans[2];
            let cardName = card.name;
            resultLineLowerCards.textContent = cardName;
        }

        if (spans[0].textContent && spans[2].textContent) {
            let winner;
            let looser;
            let leftCardValue = Number(spans[0].textContent);
            let rigthCardValue = Number(spans[2].textContent);
            if (leftCardValue > rigthCardValue) {
                winner = document.querySelector(`#player1Div img[name="${leftCardValue}"]`);
                looser = document.querySelector(`#player2Div img[name="${rigthCardValue}"]`);
            } else {
                looser = document.querySelector(`#player1Div img[name="${leftCardValue}"]`);
                winner = document.querySelector(`#player2Div img[name="${rigthCardValue}"]`);
            }
            winner.style.border = '2px solid green';
            looser.style.border = '2px solid red';

            let historyElement = document.getElementById('history');
            historyElement.textContent += `[${leftCardValue} vs ${rigthCardValue}] `;
            spans[0].textContent ='';
            spans[2].textContent = '';
        }
    }
}