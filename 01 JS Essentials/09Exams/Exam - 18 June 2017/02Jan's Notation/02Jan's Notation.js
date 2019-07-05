function solve(input) {
    let nums = [];
    let noError = true;
   
    for (let token of input) {
        if (typeof token == 'number') {
            nums.push(Number(token));
        } else {
            if (nums.length >= 2) {
                let secondNum = nums.pop();
                let firstNum = nums.pop();
                let result = 0;
                if (token == '+') {
                    result = firstNum + secondNum;
                } else if (token == '-') {
                    result = firstNum - secondNum;
                } else if (token == '*') {
                    result = firstNum * secondNum;
                } else if (token == '/') {
                    result = firstNum / secondNum;
                }
                nums.push(result);
            } else {
                console.log(`Error: not enough operands!`);
                noError = false;

            }
        }
    }
    if (nums.length > 1 && noError) {
        console.log(`Error: too many operands!`);
    } else if (nums.length == 1 && noError) {
        console.log(nums[0])
    }
}
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/'])