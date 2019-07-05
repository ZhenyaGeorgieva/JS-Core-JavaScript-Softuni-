function solve(input) {
    input = input.sort((a, b) => { return a - b });
    let resultArr = [];
    resultArr.push(input[0]);
    resultArr.push(input[1]);
    console.log(resultArr.join(" "));
}
solve([3, 0, 10, 4, 7, 3])