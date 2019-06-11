function solve(input) {
    let type = typeof (input);
    let area;
    
    if (type != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    } else {
        area = Math.PI * input * input;
        console.log(area.toFixed(2));
    }
}
solve('name')