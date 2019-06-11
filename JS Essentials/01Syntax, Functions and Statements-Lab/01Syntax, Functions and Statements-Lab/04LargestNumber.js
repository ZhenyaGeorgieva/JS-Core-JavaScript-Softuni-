function solve(a, b, c) {
    let largest;
   
    if (a >= b && a >= c) {
        largest = a;
    } else if (b > a && b > c) {
        largest = b;
    } else {
        largest = c;
    }
    console.log(`The largest number is ${largest}.`)
}
solve(-3, -5, -22.5)