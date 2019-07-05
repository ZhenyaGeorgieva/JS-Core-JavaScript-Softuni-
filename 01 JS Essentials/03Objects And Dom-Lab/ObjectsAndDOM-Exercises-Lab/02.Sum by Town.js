function solve(input) {
    let towns = {};
    for (let index = 0; index < input.length; index += 2) {
        let townName = input[index];
        let townIncome = Number(input[index + 1]);
        
        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = townIncome;
        } else {
            towns[townName] += townIncome;
        }
    }
    
    let JsonResult = JSON.stringify(towns);
    console.log(JsonResult);
}
solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
)