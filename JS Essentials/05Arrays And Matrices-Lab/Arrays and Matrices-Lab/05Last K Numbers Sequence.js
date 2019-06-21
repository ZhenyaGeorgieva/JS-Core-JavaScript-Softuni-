function solve(lengthReq, k) {
    let resultArr = [];
    resultArr.push(1);
    for (let i = 0; i < resultArr.length; i++) {
        let sum = 0;
        let limit = i - k;
        if (i - k < 0) {
            limit = 0;
        } else {
            limit += 1;
        }

        for (let y = i; y >= limit; y--) {
            let numToSum = resultArr[y];
            sum += numToSum;
        }

        if (i < lengthReq - 1) {
            resultArr.push(Number(sum));
        } else {
            break;
        }
    }
    console.log(resultArr);
}
solve(6, 3)