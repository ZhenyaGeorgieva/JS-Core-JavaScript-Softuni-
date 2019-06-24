function solve() {
    //  let namePattern=/([A-Z]{1}[a-z]{0,} [A-Z]{1,}[a-z]{0,})/g;
    //  let phonePattern=/\+359([ |\-)])[0-9]{1}\1[0-9]{3}\1[0-9]{3}/g;
    //  let emailPattern=/[a-z0-9]{1,}@[a-z]{1,}.[a-z]{2,3}/g;
   
    let arr = JSON.parse(document.getElementById('arr').value);
    let generalPattern = /(^[A-Z]{1}[a-z]{0,} [A-Z]{1}[a-z]{0,}]$)([ ]{1})(^\+359([ |\-)])[0-9]{1}\4[0-9]{3}\4[0-9]{3}$)([ ]{1})(^[a-z0-9]{1,}@[a-z]{1,}\.[a-z]{2,3}$)/g;
    let resultElement = document.getElementById('result');
  
    for (let index = 0; index < arr.length; index++) {
        let text = arr[index];
        debugger;
        let result = generalPattern.exec(text);
        if (result) {
            let newP = document.createElement('p');
            newP.textContent = `Name: ${result[1]}`;
            let newP2 = document.createElement('p');
            newP2.textContent = `Phone Number: ${result[3]}`;
            let newP3 = document.createElement('p');
            newP3.textContent = `Email: ${result[6]}`;
            resultElement.appendChild(newP);
            resultElement.appendChild(newP2);
            resultElement.appendChild(newP3);
        } else {
            let newP = document.createElement('p');
            newP.textContent = 'Invalid data';
            resultElement.appendChild(newP);
        }
        let newP = document.createElement('p');
        newP.textContent = '- - -';
        resultElement.appendChild(newP);
    }
}
