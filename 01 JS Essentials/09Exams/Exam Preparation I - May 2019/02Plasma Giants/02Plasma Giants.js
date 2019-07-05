function solve(arr, cutSize) {
    let arr1 = arr.slice(0, arr.length / 2);
    let arr2 = arr.slice(arr.length / 2);

    let cuttedArr1 = [];
    let cuttedArr2 = [];

    for (let index = 0; index < arr1.length; index += cutSize) {
        let piece1 = arr1.slice(index, index + cutSize);
        cuttedArr1.push(piece1);

        let piece2 = arr2.slice(index, index + cutSize);
        cuttedArr2.push(piece2);
    }

    let productArr1 = [];
    let productArr2 = [];
   
    for (let index = 0; index < cuttedArr1.length; index++) {
        let product1 = cuttedArr1[index].reduce((a, b) => a * b);
        productArr1.push(product1);

        let product2 = cuttedArr2[index].reduce((a, b) => a * b);
        productArr2.push(product2);
    }
    
    let giant1 = productArr1.reduce((a, b) => a + b);
    let giant2 = productArr2.reduce((a, b) => a + b);
    let sortedArr = arr.sort((a, b) => a - b);
    let damagePerHit = sortedArr[0];
    let limit = sortedArr[sortedArr.length - 1];
    let rounds = 1;
   
    if (damagePerHit > 0) {
        while (giant1 > limit && giant2 > limit) {
            giant1 -= damagePerHit;
            giant2 -= damagePerHit;
            rounds++;
        }
    }
   
    if (giant1 > giant2) {
        console.log(`First Giant defeated Second Giant with result ${giant1} - ${giant2} in ${rounds} rounds`);
    } else if (giant1 < giant2) {
        console.log(`Second Giant defeated First Giant with result ${giant2} - ${giant1} in ${rounds} rounds`);
    } else {
        console.log(`Its a draw ${giant1} - ${giant2}`);
    }
}
solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2)