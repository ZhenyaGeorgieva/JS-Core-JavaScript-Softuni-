function solve() {
   let fundamentalsPrice = 170;
   let advancedPrice = 180;
   let applicationsPrice = 190;
   let webPrice = 490;
   let totalPrice = 0;

   let button = document.getElementsByTagName('button')[0];
   button.addEventListener('click', signMe);

   let inputFields = document.getElementsByTagName('input');
   console.log(inputFields);
   let fundamendalsBox = inputFields[0];
   let advancedBox = inputFields[1];
   let applicationsBox = inputFields[2];
   let webBox = inputFields[3];
   let onlineBox = inputFields[5];

   let resultList = document.getElementById('myCourses').getElementsByTagName('ul')[0];
   let totalPriceElement = document.getElementById('myCourses').getElementsByTagName('p')[0];


   function signMe() {
      if (fundamendalsBox.checked && advancedBox.checked) {
         advancedPrice *= 0.9;
      }
      if (fundamendalsBox.checked && advancedBox.checked && applicationsBox.checked) {
         fundamentalsPrice *= 0.94;
         advancedPrice *= 0.94;
         applicationsPrice *= 0.94;
      }
      if (onlineBox.checked) {
         fundamentalsPrice *= 0.94;
         advancedPrice *= 0.94;
         applicationsPrice *= 0.94;
         webPrice *= 0.94;
      }
      if (fundamendalsBox.checked) {
         totalPrice += fundamentalsPrice;
         let newLi = document.createElement('li');
         newLi.textContent = 'JS-Fundamentals';
         resultList.appendChild(newLi);
      }
      if (advancedBox.checked) {
         totalPrice += advancedPrice;
         let newLi = document.createElement('li');
         newLi.textContent = 'JS-Advanced';
         resultList.appendChild(newLi);
      }
      if (applicationsBox.checked) {
         totalPrice += applicationsPrice;
         let newLi = document.createElement('li');
         newLi.textContent = 'JS-Applications';
         resultList.appendChild(newLi);
      }
      if (webBox.checked) {
         totalPrice += webPrice;
         let newLi = document.createElement('li');
         newLi.textContent = 'JS-Web';
         resultList.appendChild(newLi);
      }
      if (fundamendalsBox.checked && advancedBox.checked && applicationsBox.checked && webBox.checked) {
         let newLi = document.createElement('li');
         newLi.textContent = 'HTML and CSS';
         resultList.appendChild(newLi);
      }
      totalPriceElement.textContent = `Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`
   }
}
solve();
