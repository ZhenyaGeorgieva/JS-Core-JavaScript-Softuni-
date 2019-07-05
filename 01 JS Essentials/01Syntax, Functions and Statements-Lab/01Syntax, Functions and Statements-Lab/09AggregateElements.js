function solve(input) {
    let sum = 0;
    let reverseSum = 0;
    let stringResult = "";
  
    for (let index = 0; index < input.length; index++) {
        let currentNum = input[index];
        sum += currentNum;
        let reversedNum = 1 / currentNum;
        reverseSum += reversedNum;
        let stringNum = currentNum.toString();
        stringResult += stringNum;
    }
    console.log(sum);
    console.log(reverseSum);
    console.log(stringResult);
}
solve([2, 4, 8, 16])