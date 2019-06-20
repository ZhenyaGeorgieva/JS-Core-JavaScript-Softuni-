function solve() {

    let selectMenuToElement = document.getElementById('selectMenuTo');
    var binaryOption = document.createElement('option');
    binaryOption.text = 'Binary';
    binaryOption.value = 'binary';
    selectMenuToElement.add(binaryOption);
    var hexOption = document.createElement('option');
    hexOption.text = 'Hexadecimal';
    hexOption.value = 'hexadecimal';
    selectMenuToElement.add(hexOption);

    let buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener('click', function () {
        let inputElement = document.getElementById('input');
        let resultElement = document.getElementById('result');
        let inputValue = Number(inputElement.value);

        // let selectMenuToElement = document.getElementById("selectMenuTo");

        let selectedOption = selectMenuToElement.options[selectMenuToElement.selectedIndex].text;
        // let selectedOption = selectMenuToElement.options[0].value;

        if (selectedOption === 'Binary') {
            var binary = parseInt(inputValue, 10);
            resultElement.value = binary.toString(2);

        } else {
            if (inputValue < 0) {
                inputValue = 0xFFFFFFFF + inputValue + 1;
            }
            resultElement.value = inputValue.toString(16).toUpperCase();
        }
    });
}