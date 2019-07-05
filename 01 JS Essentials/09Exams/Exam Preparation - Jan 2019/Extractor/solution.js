function solve() {
    let output = document.getElementById('output');
    let button = document.querySelector('button');

    button.addEventListener('click', extract);

    function extract() {
        let input = document.getElementById('input').value;
        console.log(input);
        let pattern = /[0-9]+/g;
        let charsToTake = input.match(pattern)[0];
        console.log(charsToTake);
        let slicedString = input.substr(charsToTake.length, Number(charsToTake));
        console.log(slicedString);
        let delimeter = slicedString[slicedString.length - 1];
        console.log(delimeter);
        let parts = slicedString.split(delimeter).filter(Boolean);
        console.log(parts)
        parts[1] = parts[1].replace(new RegExp(`[${parts[0]}]`, 'g'), '');
        console.log(parts)
        while (parts[1].includes('#')) {
            parts[1] = parts[1].replace('#', ' ');
        }
        output.value = parts[1];
    }
}