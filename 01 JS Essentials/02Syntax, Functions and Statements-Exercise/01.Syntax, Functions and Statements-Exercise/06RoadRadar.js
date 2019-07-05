function solve(input) {
    let currentSpeed = input[0];
    let currentArea = input[1];
    let limitSpeed = 0;
    if (currentArea == 'motorway') {
        limitSpeed = 130;
    } else if (currentArea == 'interstate') {
        limitSpeed = 90;
    } else if (currentArea == 'city') {
        limitSpeed = 50;
    } else if (currentArea == 'residential') {
        limitSpeed = 20;
    }
    
    let difference = currentSpeed - limitSpeed;
    if (difference > 0 && difference <= 20) {
        console.log('speeding');
    } else if (difference > 20 && difference <= 40) {
        console.log('excessive speeding');
    } else if (difference > 40) {
        console.log('reckless driving')
    }
}
solve([21, 'residential'])


