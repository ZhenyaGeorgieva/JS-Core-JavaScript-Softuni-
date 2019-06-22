function solve(input) {
    let matrix = [];
    for (let row of input) {
        row = row.split(' ').map(x => Number(x));
        matrix.push(row);
    }

    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let firstDiagonalElement = matrix[row][row];
        let secondDiagonalElement = matrix[row][matrix[row].length - 1 - row];
        firstDiagonalSum += firstDiagonalElement;
        secondDiagonalSum += secondDiagonalElement;
    }
    if (secondDiagonalSum != firstDiagonalSum) {
        for (let row of matrix) {
            console.log(row.join(' '));
        }
    } else {
        for (let row = 0; row < matrix.length; row++) {
            let firstDiagonalElement = matrix[row][row];
            let secondDiagonalElement = matrix[row][matrix[row].length - 1 - row];
            for (let col = 0; col < matrix[row].length; col++) {
                if (row != col && col != matrix[row].length - 1 - row) {
                    matrix[row][col] = firstDiagonalSum;
                }
            }

        }
        for (let row of matrix) {
            console.log(row.join(' '));
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])