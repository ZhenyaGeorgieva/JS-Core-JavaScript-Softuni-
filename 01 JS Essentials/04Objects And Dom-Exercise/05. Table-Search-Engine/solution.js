function solve() {
   let rowElements = document.getElementsByTagName('tbody')[0];
   let elementsInRows = rowElements.getElementsByTagName('td');
   let arrayOfElementsInRows = Array.from(elementsInRows);
   let searchButtonElement = document.getElementById('searchBtn');
   searchButtonElement.addEventListener('click', getContentToSearch);

   function getContentToSearch() {
      clearMarkedElements();
      let inputFieldElement = document.getElementsByTagName('input')[0];
      let wordToSearch = inputFieldElement.value;
      findSameWord(wordToSearch);
   }

   function findSameWord(wordToSearch) {
      for (let index = 0; index < arrayOfElementsInRows.length; index++) {
         let textInTableElement = arrayOfElementsInRows[index];
         let textInTable = textInTableElement.textContent;
         if (textInTable.includes(wordToSearch)) {
            let nodeOfFound = textInTableElement.parentNode;
            nodeOfFound.setAttribute('class', 'select');
            clearInputField();
         }
      }
   }

   function clearInputField() {
      let inputFieldElement = document.getElementsByTagName('input')[0];
      inputFieldElement.value = '';
   }

   function clearMarkedElements() {
      let singleRowElements = rowElements.getElementsByTagName('tr');
      for (let rowToClear of Array.from(singleRowElements)) {
         rowToClear.removeAttribute('class');
      }
   }
}
