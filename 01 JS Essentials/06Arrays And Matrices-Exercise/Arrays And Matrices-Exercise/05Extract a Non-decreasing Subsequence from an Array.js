function solve(input) {
    let resultArr = [];
    
    for (let index = 0; index < input.length; index++) {
        let biggest = input.shift();
        resultArr.push(biggest);
        input = input.filter(x => x >= biggest);
        index = 0;
    }
   
    if (input.length > 0) {
        resultArr.push(input[input.length - 1])
    }
    
    for (let num of resultArr) {
        console.log(num);
    }
}
solve([20,
    3,
    2,
    15,
    6,
    1])