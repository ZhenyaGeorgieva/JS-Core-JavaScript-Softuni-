function solve() {
   let lines = Array.from(document.getElementsByTagName('li'));
   let ascii = 97;
   for (let line of lines) {
      let letter = String.fromCharCode(ascii);
      line.setAttribute('id', `${letter}`)
      ascii++;
   }

   let buttonElement = document.getElementsByTagName('button')[0];
   buttonElement.addEventListener('click', () => {
      let inputField = document.getElementsByTagName('input')[0];
      let nameToAdd = inputField.value;
      nameToAdd = nameToAdd.toLowerCase();

      let firstLetterOfName = nameToAdd[0];
      let correspondingLine = document.getElementById(`${firstLetterOfName}`);

      nameToAdd = nameToAdd.replace(firstLetterOfName, firstLetterOfName.toUpperCase());
      if (!correspondingLine.textContent) {
         correspondingLine.textContent += nameToAdd;
      } else {
         correspondingLine.textContent += `, ${nameToAdd}`;
      }
      inputField.value = '';
   })
}