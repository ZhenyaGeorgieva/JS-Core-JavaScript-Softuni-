function solve(input) {
    let biggestNumsArr = [];

    for (let index = 0; index < input.length; index++) {
        let sortedArr = input[index].sort((a, b) => { return b - a });
        let biggestNum = sortedArr[0];
        biggestNumsArr.push(biggestNum);
    }

    biggestNumsArr = biggestNumsArr.sort((a, b) => { return b - a });
    let biggest = biggestNumsArr[0];
    console.log(biggest)
}

solve([[20, 50, 10],
[8, 33, 145]])