function solve(a, b, c) {
    let distanceInM = a * b;
    let distanceInKM = distanceInM / 1000;
    let speed = c;
    let timeWithoutRestHours = distanceInKM / speed;
    let rests = parseInt(distanceInM / 500);
    let breaksInSec = rests * 60;
    let timeTotalInSec = timeWithoutRestHours * 60 * 60 + breaksInSec;
    let hours = parseInt(timeTotalInSec / 3600);
    let restMin = timeTotalInSec % 3600;
    let min = parseInt(restMin / 60);
    let restSec = restMin % 60;
    let hoursToString = hours.toString().padStart(2, '0');
    let minToString = min.toString().padStart(2, '0');
    let secToString = Math.round(restSec).toString().padStart(2, '0');
    console.log(`${hoursToString}:${minToString}:${Math.round(secToString)}`)
}
solve(2564, 0.70, 5.5)