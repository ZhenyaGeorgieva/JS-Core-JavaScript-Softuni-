function solve() {
    let word = document.getElementById('word').value;
    let text = document.getElementById('text').value;
    let parts = JSON.parse(text);
    let wordToReplace = parts[0].split(' ');
    wordToReplace = wordToReplace[2];
    console.log(wordToReplace);

    let pattern = new RegExp(wordToReplace, 'gi');
    parts = parts.map(part => part.replace(pattern, word));
    let resultElement = document.getElementById('result');

    for (let part of parts) {
        let newElement = document.createElement('p');
        newElement.textContent = part;
        resultElement.appendChild(newElement);
    }
}
