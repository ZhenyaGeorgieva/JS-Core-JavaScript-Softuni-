function solve() {
    
    let arrElement = document.getElementById('input');
    let arr = arrElement.value;
    arr = arr.split('');
    let initialSum = Number(arr.map(a => Number(a)).reduce((a, b) => a + b));
    
    while (initialSum > 9) {
        initialSum = Number(initialSum.toString().split('').map(a => Number(a)).reduce((a, b) => a + b));
    }
   
    for (let index = 0; index < initialSum; index++) {
        arr.pop();
        arr.shift();
    }
    
    let substringArr = [];
    for (let index = 0; index < arr.length; index += 8) {
        let substring = arr.slice(index, index + 8);
        let asciiCode = parseInt(substring.join(''), 2);
        if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122) || asciiCode == 32) {
            let symbol = String.fromCharCode(asciiCode);
            substringArr.push(symbol);
        }
    }

    let resultElement = document.getElementById('resultOutput');
    resultElement.textContent = substringArr.join('');
}
