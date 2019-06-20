function solve() {
    let expression = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");

    let clearButton = document.getElementsByClassName("clear")[0];
    clearButton.addEventListener("click", () => {
        right = "";
        left = "";
        operand = "";
        valid = true;
        expression.textContent = "";
        result.textContent = "";
    });

    let right = "";
    let left = "";
    let operand = "";
    let valid = true;

    let operands = ["-", "+", "/", "*"];

    let buttons = document.querySelectorAll(".keys>button");
    for (let btn of buttons) {
        btn.addEventListener("click", (e) => {
            let value = e.target.value;
            if (value === "=") {
                if (operand !== "" && left === "") {
                    valid = false;
                }
                if (valid) {
                    if (operand === "" && left === "") {
                        result.textContent = right;
                        return;
                    }
                    left = Number(left);
                    right = Number(right);
                    let opResult;
                    switch (operand) {
                        case "*":
                            opResult = right * left;
                            break;
                        case "/":
                            opResult = right / left;
                            break;
                        case "+":
                            opResult = right + left;
                            break;
                        case "-":
                            opResult = right - left;
                            break;
                    }

                    result.textContent = opResult;
                } else {
                    result.textContent = "NaN";
                }
            } else {
                if (operands.includes(value)) {
                    if (operand !== "") {
                        valid = false;
                    } else {
                        operand = value;
                    }
                    if (right === "") {
                        valid = false;
                    }
                    expression.textContent = expression.textContent + " " + value + " ";
                } else {
                    if (operand === "") {
                        right += value;
                    } else {
                        left += value;
                    }
                    expression.textContent = expression.textContent + value;
                }
            }
        });
    }
}