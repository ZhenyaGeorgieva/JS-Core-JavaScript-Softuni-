function solve(input) {
    let resultArr = [];

    for (let index = 0; index < input.length; index++) {
        let num = input[index];
        if (num < 0) {
            resultArr.unshift(num);
        } else {
            resultArr.push(num);
        }
    }

    for (let num of resultArr) {
        console.log(num);
    }
}
solve([7, -2, 8, 9])