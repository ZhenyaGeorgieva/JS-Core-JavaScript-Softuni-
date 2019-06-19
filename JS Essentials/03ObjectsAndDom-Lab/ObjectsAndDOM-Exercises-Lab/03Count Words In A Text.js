function solve(input) {
    let pattern = /[A-Za-z0-9_]{1,}/g;
    let matches = input[0].match(pattern);

    let wordsCount = {};
    for (let index = 0; index < matches.length; index++) {
        let currentWord = matches[index];
       
        if (!wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord] = 1;
        } else {
            wordsCount[currentWord]++;
        }
    }
    
    let JsonResult = JSON.stringify(wordsCount);
    console.log(JsonResult);
}
solve(["Far too slow, you're far too slow."])