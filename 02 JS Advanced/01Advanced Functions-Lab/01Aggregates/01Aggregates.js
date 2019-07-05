function aggregate(arr) {
    console.log(`Sum = ${arr.reduce((acc, c) => acc + c, 0)}`);
    console.log(`Min = ${arr.reduce((acc, c) => Math.min(acc, c), Number.MAX_SAFE_INTEGER)}`);
    console.log(`Max = ${arr.reduce((acc, c) => Math.max(acc, c), Number.MIN_SAFE_INTEGER)}`);
    console.log(`Product = ${arr.reduce((acc, c) => acc * c, 1)}`);
    console.log(`Join = ${arr.reduce((acc, c) => acc + c, '')}`);
    //arr.join('');
}
let myArr = [
    2, 
    3, 
    10, 
    5
]
aggregate(myArr);
