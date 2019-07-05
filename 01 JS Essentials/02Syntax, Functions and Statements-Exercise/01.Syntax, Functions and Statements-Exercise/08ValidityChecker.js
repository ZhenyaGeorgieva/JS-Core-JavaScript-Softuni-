function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = 0;
    let y2 = 0;
    let resultOne = calculateDistance(x1, y1, x2, y2);
   
    if (Number.isInteger(resultOne)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
   
    x1 = input[2];
    y1 = input[3];
    x2 = 0;
    y2 = 0;
    
    let resultSecond = calculateDistance(x1, y1, x2, y2);
    if (Number.isInteger(resultSecond)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    
    x1 = input[0];
    y1 = input[1];
    x2 = input[2];
    y2 = input[3];
    let resultThird = calculateDistance(x1, y1, x2, y2);
    
    if (Number.isInteger(resultThird)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
    }
}
solve([2, 1, 1, 1]);