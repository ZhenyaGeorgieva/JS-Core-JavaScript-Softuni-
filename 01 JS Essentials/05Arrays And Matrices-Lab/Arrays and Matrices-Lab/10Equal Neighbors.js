function solve(input) {
    let counterOfPairs = 0;
    for (let index = 0; index < input.length - 1; index++) {
        let arrToCompare1 = input[index];
        let arrToCompare2 = input[index + 1];

        for (let z = 0; z < arrToCompare1.length - 1; z++) {
            if (arrToCompare1[z] == arrToCompare1[z + 1]) {
                counterOfPairs++;
            }
        }

        let limit = 0;
        
        if (arrToCompare1.length <= arrToCompare2.length) {
            limit = arrToCompare1.length;
        } else {
            limit = arrToCompare2.length;
        }
        
        for (let y = 0; y < limit; y++) {
            let firstElementToCompare = arrToCompare1[y];
            let secondElementToCompare = arrToCompare2[y];
            if (firstElementToCompare == secondElementToCompare) {
                counterOfPairs++;
            }
        }
    }
    
    let lastArrayOfMatrix = input[input.length - 1];
    
    for (let index = 0; index < lastArrayOfMatrix.length - 1; index++) {
        if (lastArrayOfMatrix[index] == lastArrayOfMatrix[index + 1]) {
            counterOfPairs++;
        }
    }
    console.log(counterOfPairs);
}
solve([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])