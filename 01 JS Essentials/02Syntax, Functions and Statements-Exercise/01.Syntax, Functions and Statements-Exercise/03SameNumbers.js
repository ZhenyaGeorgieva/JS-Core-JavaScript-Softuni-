function solve(input) {
    let numberArr = input.toString().split('');
    let areTheSame = true;
    let sum = 0;
    for (let index = 0; index < numberArr.length - 1; index++) {
        let currentNum = Number(numberArr[index]);
        let nextNum = Number(numberArr[index + 1]);
        if (currentNum != nextNum) {
            areTheSame = false;
        }
        sum += currentNum;
    }
    sum += Number(numberArr[numberArr.length - 1]);
    if (areTheSame) {
        console.log('true')
    } else {
        console.log('false')
    }
    console.log(sum);
}
solve(1234)