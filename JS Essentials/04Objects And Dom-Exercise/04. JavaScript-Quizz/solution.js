function solve() {
  let answerButtons = document.getElementsByTagName('p');
  let answerButtonsArray = Array.from(answerButtons);
  let indexOfPage = 0;
  let resultPoints = 0;
  for (let button of answerButtonsArray) {
    button.addEventListener('click', getAnswer);
  }

  let sectionElements = document.getElementsByTagName('section');
  let arrayOfSectionElements = Array.from(sectionElements);

  function getAnswer(e) {
    let target = e.target;
    readResult(target);
    if (indexOfPage + 1 >= arrayOfSectionElements.length) {
      showFinalResult();
    } else {
      currentElementIndex = indexOfPage;
      indexOfPage++;
      nextElementIndex = indexOfPage;
      let currentElement = arrayOfSectionElements[currentElementIndex];
      let nextElement = arrayOfSectionElements[nextElementIndex];
      currentElement.style.display = 'none';
      nextElement.style.display = 'block';
    }
  }

  function showFinalResult() {
    let lastQuestionSection = arrayOfSectionElements[arrayOfSectionElements.length - 1];
    lastQuestionSection.style.display = 'none';
    let resultElement = document.getElementById('results');
    resultElement.style.display = 'block';
    let textOfResultElement = resultElement.getElementsByTagName('h1')[0];
    if (resultPoints == 3) {
      textOfResultElement.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      textOfResultElement.textContent = `You have ${resultPoints} right answers`;
    }
  }

  function readResult(target) {
    if (target.textContent == 'onclick' || target.textContent == 'JSON.stringify()' || target.textContent == 'A programming API for HTML and XML documents') {
      resultPoints++;
    }
  }
}
//element.style.display = 'none';           // Hide
//element.style.display = 'block';  //unhide

