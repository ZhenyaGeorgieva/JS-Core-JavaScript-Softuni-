function solve(input) {
    let numOfRotations = Number(input.pop());
   
    if (numOfRotations >= input.length) {
        numOfRotations = numOfRotations % input.length;
    }
   
    for (let index = 0; index < numOfRotations; index++) {
        let numToAddAtBeginning = input.pop();
        input.unshift(numToAddAtBeginning);
    }
    console.log(input.join(' '))
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'])