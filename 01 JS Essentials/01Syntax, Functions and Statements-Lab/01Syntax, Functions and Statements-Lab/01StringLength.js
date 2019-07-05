function solve(word1, word2, word3) {
    let length1 = word1.length;
    let length2 = word2.length;
    let length3 = word3.length;
    let sum = length1 + length2 + length3;
    console.log(sum);
    let average = Math.floor(sum / 3);
    console.log(average);
}
solve('pasta', '5', '22.3')