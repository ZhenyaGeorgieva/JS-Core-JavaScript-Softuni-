function solve(arr, firstIndex, secondIndex) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (firstIndex < 0) {
        firstIndex = 0;
    }

    if (firstIndex >= arr.length) {
        secondIndex = arr.length - 1;
    }

    let subArr = arr.slice(firstIndex, secondIndex + 1);

    if (!subArr.every(Number)) {
        return NaN;
    }
    if (arr.length <= 0) {
        return 0;
    }
    return arr
        .map(Number)
        .slice(firstIndex, secondIndex + 1)
        .reduce((a, b) => a + b);
}
console.log(solve(0, 3, 300));