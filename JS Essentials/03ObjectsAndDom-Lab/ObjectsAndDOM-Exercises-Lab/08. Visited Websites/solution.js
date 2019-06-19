function solve() {
  let classElements = document.getElementsByClassName('link-1');

  for (let classElement of Array.from(classElements)) {

    classElement.addEventListener('click', (e) => {
      let currentTarget = e.currentTarget;
      let elementToChange = currentTarget.getElementsByTagName('p')[0];
      let elementToChangeContent = elementToChange.textContent;
      let tokensOfElementToChange = elementToChangeContent.split(' ');
      let clickCounter = Number(tokensOfElementToChange[1]);
      clickCounter++;
      tokensOfElementToChange[1] = clickCounter;
      let changedText = tokensOfElementToChange.join(' ');
      elementToChange.textContent = changedText;
    })
  }
}
