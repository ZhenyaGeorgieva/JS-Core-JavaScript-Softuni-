function solve(input) {
    let magical = true;
    let longestRowLenght = 0;
    let magicalSum = input[0].reduce((a, b) => { return a + b });

    for (let index = 0; index < input.length; index++) {
        let firstArr = input[index];
        let sumFirst = firstArr.reduce((a, b) => { return a + b });
        if (sumFirst != magicalSum) {
            magical = false;
        }
        if (firstArr.length >= longestRowLenght) {
            longestRowLenght = firstArr.length;
        }
    }

    if (magical) {
        for (let index = 0; index < longestRowLenght; index++) {
            let sum = 0;
            for (let row = 0; row < input.length; row++) {
                if (index <= input[row].length - 1) {
                    let numToAdd = input[row][index];
                    sum += numToAdd;
                }
            }
            if (sum != magicalSum) {
                magical = false;
                break;
            }
        }
    }

    if (magical) {
        console.log('true');
    } else {
        console.log('false');
    }
}
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])