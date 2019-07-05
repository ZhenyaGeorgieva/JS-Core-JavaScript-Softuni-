function solve(input) {
    let firstDiagonalSum = 0;
    
    for (let index = 0; index < input.length; index++) {
        let numberToAdd = input[index][index];
        firstDiagonalSum += numberToAdd;
    }

    let secondDiagonalSum = 0;
    let counter = 0;
    
    for (let index = input.length - 1; index >= 0; index--) {
        let numberToAdd = input[index][counter];
        secondDiagonalSum += numberToAdd;
        counter++;
    }
    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`)
}
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]])