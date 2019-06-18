function solve(input) {
    let obj = {};
    for (let index = 0; index < input.length; index += 2) {
        let product = input[index];
        let calorie = Number(input[index + 1]);
        obj[product] = calorie;
    }
    console.log(obj)
}
solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])