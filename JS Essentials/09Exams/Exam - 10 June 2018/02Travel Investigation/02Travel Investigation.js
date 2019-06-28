function solve(input) {
    let delimeter = input[1];
    let companies = input[0].split(delimeter);
    let validArr = [];
    let invalidArr = [];
    
    for (let index = 2; index < input.length; index++) {
        let text = input[index].toLowerCase();
        let valid = true;
        
        for (let company of companies) {
            if (!text.includes(company)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            validArr.push(text);
        } else {
            invalidArr.push(text);
        }
    }
    
    if (validArr.length > 0) {
        console.log('ValidSentences');
        let counterValid = 0;
        for (let valid of validArr) {
            counterValid++;
            console.log(`${counterValid}. ${valid}`);
        }
    }
   
    if (validArr.length > 0 && invalidArr.length > 0) {
        console.log(('=').repeat(30));
    }
   
    if (invalidArr.length > 0) {
        console.log('InvalidSentences');
        let counterInValid = 0;
       
        for (let invalid of invalidArr) {
            counterInValid++;
            console.log(`${counterInValid}. ${invalid}`);
        }
    }
}
solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "])