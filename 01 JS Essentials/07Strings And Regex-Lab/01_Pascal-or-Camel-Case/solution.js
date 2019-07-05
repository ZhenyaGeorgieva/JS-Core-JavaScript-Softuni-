function solve() {
  let textToModify = document.getElementById('text').value;
  let conventionType = document.getElementById('naming-convention').value;
  let resultString = '';

  if (conventionType == 'Pascal Case') {
    textToModify = textToModify.split(' ');
    for (let word of Array.from(textToModify)) {
      word = word.toLowerCase().split('');
      let firstLetter = word[0].toUpperCase();
      word.splice(0, 1, firstLetter);
      let result = word.join("");
      resultString += result;
    }
  } else if (conventionType == 'Camel Case') {
    let arrayOfText = Array.from(textToModify.split(' '));
    for (let index = 0; index < arrayOfText.length; index++) {
      let word = arrayOfText[index];

      if (index == 0) {
        word = word.toLowerCase();
        resultString += word;
      } else {
        word = word.toLowerCase().split('');
        let firstLetter = word[0].toUpperCase();
        word.splice(0, 1, firstLetter);
        let result = word.join("");
        resultString += result;
      }
    }
  } else {
    resultString += 'Error!'
  }

  let outputField = document.getElementById('result');
  outputField.innerHTML = resultString;
}
