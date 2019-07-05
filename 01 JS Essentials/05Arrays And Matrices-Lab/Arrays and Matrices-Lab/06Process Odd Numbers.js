function solve(input) {
    let resultArr = [];

    for (let index = 0; index < input.length; index++) {
        if (index % 2 != 0) {
            resultArr.push(input[index] * 2);
        }
    }

    resultArr = resultArr.reverse();
    console.log(resultArr.join(" "));
}
solve([10, 15, 20, 25])