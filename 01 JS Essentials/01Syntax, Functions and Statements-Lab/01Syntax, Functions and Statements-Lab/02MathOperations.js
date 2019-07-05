function solve(operand1, operand2, sign) {
    let result = 0;
   
    if (sign == "+") {
        result = operand1 + operand2;
    } else if (sign == "-") {
        result = operand1 - operand2;
    } else if (sign == "*") {
        result = operand1 * operand2;
    } else if (sign == "%") {
        result = operand1 % operand2;
    } else if (sign == "/") {
        result = operand1 / operand2;
    } else if (sign == "**") {
        result = operand1 ** operand2;
    }
    console.log(result);
}
solve(5, 6, '+')