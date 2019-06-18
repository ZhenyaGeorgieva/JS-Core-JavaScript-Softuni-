function solve(input) {
    let number = Number(input[0]);
    
    for (let index = 1; index < input.length; index++) {
        let action = input[index];
       
        if (action == 'chop') {
            number /= 2;
            console.log(number);
        } else if (action == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (action == 'spice') {
            number += 1;
            console.log(number);
        } else if (action == 'bake') {
            number *= 3;
            console.log(number);
        } else if (action == 'fillet') {
            number *= 0.8;
            console.log(number);
        }
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])