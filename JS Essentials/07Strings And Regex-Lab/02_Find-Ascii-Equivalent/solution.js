function solve() {
  let textField = document.getElementById('text');
  let textToTransform = textField.value;
  let arrayOfWords = Array.from(textToTransform.split(' '));
  let words = [];
  let numbers = [];

  for (let index = 0; index < arrayOfWords.length; index++) {
    let currentWord = arrayOfWords[index];
    if (Number(currentWord)) {
      numbers.push(currentWord);
    } else {
      words.push(currentWord);
    }
  }

  let resultWords = [];
  for (let word of words) {
    let currentWordResult = [];
    for (let index = 0; index < word.length; index++) {
      let charOfCurrentWord = word[index];
      let asciiOfChar = charOfCurrentWord.charCodeAt();
      currentWordResult.push(asciiOfChar);
    }
    resultWords.push(currentWordResult);
  }

  let resultString = '';
  for (let num of numbers) {
    let correspondingChar = String.fromCharCode(num);
    resultString += correspondingChar;
  }

  let resultField = document.getElementById('result');
  for (let word of resultWords) {
    let finalToPrint = word.join(' ');
    let elementForFinalResult = document.createElement('p');
    elementForFinalResult.innerHTML = finalToPrint;
    resultField.appendChild(elementForFinalResult);
  }

  let elementForResultWord = document.createElement('p');
  elementForResultWord.innerHTML = resultString;
  resultField.appendChild(elementForResultWord);
}