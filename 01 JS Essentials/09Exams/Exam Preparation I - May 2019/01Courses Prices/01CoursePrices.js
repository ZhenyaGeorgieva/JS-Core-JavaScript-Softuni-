function solve(fundamentals, advanced, applications, type) {
    let total = 0;
    if (fundamentals) {
        total += 170;
    }
    if (advanced) {
        total += 180;
    }
    if (applications) {
        total += 190;
    }
    if (fundamentals 
        && advanced) {
        total -= (0.1 * 180);
    }
    if (fundamentals 
        && advanced 
        && applications) {
        total *= 0.94;
    }
    if (type == 'online') {
        total *= 0.94;
    }
    console.log(Math.round(total));
}
solve(true, true, false, 'onsite');

