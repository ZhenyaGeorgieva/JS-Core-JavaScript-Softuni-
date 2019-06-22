function solve(input) {
    let number = 1;
    let resulArr = [];
    for (let index = 0; index < input.length; index++) {
        let command = input[index];
        if (command == 'add') {
            resulArr.push(number);
        } else {
            resulArr.pop()
        }
        number++;
    }
    
    if (resulArr.length > 0) {
        for (let num of resulArr) {
            console.log(num);
        }
    } else {
        console.log('Empty')
    }
}
solve(['remove',
    'remove',
    'remove'])