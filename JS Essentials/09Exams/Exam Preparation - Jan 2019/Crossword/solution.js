function solve() {
   let buttons = document.getElementsByTagName('button');
   let output = document.getElementById('output');
   let outputParagraph = output.getElementsByTagName('p')[0];

   buttons[0].addEventListener('click', filter);
   buttons[1].addEventListener('click', sort);
   buttons[2].addEventListener('click', rotate);
   buttons[3].addEventListener('click', get);

   function filter() {
      let input = document.getElementById('input').value.split('');
      let secondCmd = document.getElementById('filterSecondaryCmd').value;
      let position = document.getElementById('filterPosition').value - 1;
      let result;
      if (secondCmd === 'uppercase') {
         result = input.filter(x => x === x.toUpperCase() && isNaN(x))[position];
      } else if (secondCmd === 'lowercase') {
         result = input.filter(x => x === x.toLowerCase() && isNaN(x))[position];
      } else {
         result = input.filter(x => !isNaN(x))[position];
      }
      outputParagraph.textContent += result;
   }

   function sort() {
      let input = document.getElementById('input').value.split('');
      let secondCmd = document.getElementById('sortSecondaryCmd').value;
      let position = document.getElementById('sortPosition').value - 1;
      let result;
      if (secondCmd == 'A') {
         result = input.sort((a, b) => a.localeCompare(b))[position];
      } else {
         result = input.sort((a, b) => b.localeCompare(a))[position];
      }
      outputParagraph.textContent += result;
   }

   function rotate() {
      let input = document.getElementById('input').value.split('');
      let secondCmd = document.getElementById('rotateSecondaryCmd').value;
      let position = document.getElementById('rotatePosition').value - 1;
      let rotationsCount = secondCmd % input.length;
      for (let index = 0; index < rotationsCount; index++) {
         let elementToTake = input.pop();
         input.unshift(elementToTake);
      }
      let result = input[position];
      outputParagraph.textContent += result;
   }

   function get() {
      let input = document.getElementById('input').value.split('');
      let position = document.getElementById('getPosition').value - 1;
      let result = input[position];
      outputParagraph.textContent += result;
   }
}