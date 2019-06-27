function solve(arr, command) {
    let tokens = command.split(' ');
    let action = tokens[0];

    if (action == 'hide') {
        let headerToHide = tokens[1];
        let indexToHide = arr[0].indexOf(headerToHide);
        arr[0].splice(indexToHide, 1);

        for (let index = 1; index < arr.length; index++) {
            let currentArr = arr[index];
            currentArr.splice(indexToHide, 1);
        }
    } else if (action == 'sort') {
        let criteria = tokens[1];
        let indexOfCriteria = arr[0].indexOf(criteria);
        let firstRow = arr.shift();
        arr.sort((a, b) => a[indexOfCriteria].localeCompare(b[indexOfCriteria]));
        arr.unshift(firstRow);
    } else if (action == 'filter') {
        let criteria = tokens[1];
        let valueOfCriteria = tokens[2];
        let indexOfCriteria = arr[0].indexOf(criteria);

        for (let index = 1; index < arr.length; index++) {
            let currentArr = arr[index];
            if (currentArr[indexOfCriteria] != valueOfCriteria) {
                arr.splice(index, 1);
                index--;
            }
        }
    }
    for (let line of arr) {
        console.log(line.join(' | '));
    }
}

solve([['name', 'age', 'grade'],
['Peter', '25', '5.00'],
['George', '34', '6.00'],
['Marry', '28', '5.49']],
    'filter name Marry')