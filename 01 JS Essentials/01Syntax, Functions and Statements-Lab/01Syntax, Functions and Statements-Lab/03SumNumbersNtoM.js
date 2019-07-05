function solve(a, b) {
    a = Number(a);
    b = Number(b);
    let sum = 0;
    
    for (let index = a; index <= b; index++) {
        sum += index;
    }
    console.log(sum);
}
solve('-8', '20')