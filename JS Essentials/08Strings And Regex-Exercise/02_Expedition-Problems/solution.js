function solve() {
    let password = document.getElementById("string").value;
    let text = document.getElementById("text").value;
    let resultElement = document.getElementById("result")

    let regexNorthEast = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gim;

    let matchResult = regexNorthEast.exec(text);
    let finalNorth = '';
    let finalEast = '';
   
    while (matchResult !== null) {
        let sorted = matchResult.filter(x => x != '' && x != undefined).map(x => x.toLowerCase());
        if (sorted.includes('north')) {
            finalNorth = sorted;
            console.log(finalNorth)
        } else if (sorted.includes('east')) {
            finalEast = sorted;
            console.log(finalEast);
        }
        matchResult = regexNorthEast.exec(text);
    }
    
    let finalNorthPrint = `${finalNorth[2]}.${finalNorth[3]} N`;
    let newElement1 = document.createElement('p');
    newElement1.textContent = finalNorthPrint;
    resultElement.appendChild(newElement1);

    let finalEastPrint = `${finalEast[2]}.${finalEast[3]} E`;
    let newElement = document.createElement('p');
    newElement.textContent = finalEastPrint;
    resultElement.appendChild(newElement);


    let firstIndexPassword = text.indexOf(password);
    let lastIndexPassword = text.lastIndexOf(password);
    let message = text.substring(firstIndexPassword + password.length, lastIndexPassword);
    let newElement3 = document.createElement('p');
    newElement3.textContent = `Message: ${message}`;
    resultElement.appendChild(newElement3);
}