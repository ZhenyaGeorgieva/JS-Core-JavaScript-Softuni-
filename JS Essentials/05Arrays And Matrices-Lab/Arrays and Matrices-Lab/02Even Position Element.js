function solve(input) {
    let output = [];
    for (let index = 0; index < input.length; index++) {
        if (index % 2 == 0) {
            output.push(input[index]);
        }
    }
    console.log(output.join(" "));
}
solve(['20', '30', '40'])