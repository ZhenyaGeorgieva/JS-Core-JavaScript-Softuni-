function solve(arr1, arr2) {
    let result = [];

    for (let index = 0; index < arr1.length; index++) {
        let firstArr = arr1[index];
        let secondArr = arr2[index];
        let length = 0;

        let reminder = 0;
        let resultArr = [];
        if (firstArr.length >= secondArr.length) {
            length = firstArr.length;
        } else {
            length = secondArr.length;
        }
        for (let y = 0; y < length; y++) {
            let sum = 0;
            if (firstArr[y]) {
                sum += firstArr[y];
            }
            if (secondArr[y]) {
                sum += secondArr[y];
            }
            sum += reminder;
            if (sum < 10) {
                resultArr.push(sum);
                reminder = 0;
            } else {
                resultArr.push(9);
                reminder = sum - 9;
            }
        }
        if (reminder > 0 && reminder < 10) {
            resultArr.push(reminder);
        } else {
            while (reminder > 9) {
                reminder -= 9;
                resultArr.push(9);
            }
            if (reminder > 0 && reminder < 9) {
                resultArr.push(reminder);
            }
        }
        result.push(resultArr);
    }
    console.log(JSON.stringify(result));
}
solve([[9, 9], [4, 7]],
    [[7, 1], [1, 2]])