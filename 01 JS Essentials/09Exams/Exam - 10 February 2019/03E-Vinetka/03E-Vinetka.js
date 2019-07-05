function solve(input) {
    let bestTown = {};

    for (let line of input) {
        let currentTown = line.town;
        let currentProfit = line.price;

        if (!bestTown.hasOwnProperty(currentTown)) {
            bestTown[currentTown] = {};
            bestTown[currentTown].profit = currentProfit;
            bestTown[currentTown].vignetes = 1;
        } else {
            bestTown[currentTown].profit += currentProfit;
            bestTown[currentTown].vignetes += 1;
        }
    }
    let bestTownName = Object.entries(bestTown).sort((a, b) => b[1].profit - a[1].profit || b[1].vignetes - a[1].vignetes || a[0].localeCompare(b[0]))[0][0];
    console.log(`${bestTownName} is most profitable - ${bestTown[bestTownName].profit} BGN`);
    let filteredByTownName = input.filter(x => x.town == bestTownName);
    let modelsInBestTown = {};

    for (let line of filteredByTownName) {
        let currentModel = line.model;
        let price = line.price;
        if (!modelsInBestTown.hasOwnProperty(currentModel)) {
            modelsInBestTown[currentModel] = {};
            modelsInBestTown[currentModel].count = 1;
            modelsInBestTown[currentModel].price = price;
        } else {
            modelsInBestTown[currentModel].count += 1;
            if (modelsInBestTown[currentModel].price < price) {
                modelsInBestTown[currentModel].price = price;
            }
        }
    }
    let bestModelName = Object.entries(modelsInBestTown).sort((a, b) => b[1].count - a[1].count || b[1].price - a[1].price || a[0].localeCompare(b[0]))[0][0];
    let filteredByBestModelName = input.filter(x => x.model == bestModelName);
    console.log(`Most driven model: ${bestModelName}`);
    let bestModelInfo = {};

    for (let line of filteredByBestModelName) {
        let currentTown = line.town;
        let regNum = line.regNumber;
        if (!bestModelInfo.hasOwnProperty(currentTown)) {
            bestModelInfo[currentTown] = [];
            bestModelInfo[currentTown].push(regNum);
        } else {
            bestModelInfo[currentTown].push(regNum);
        }
    }

    let sortedTowns = Object.keys(bestModelInfo).sort((a, b) => a.localeCompare(b));

    for (let townName of sortedTowns) {
        let reNumsInTown = bestModelInfo[townName].sort((a, b) => a.localeCompare(b));
        let result = `${townName}: `;
        result += `${reNumsInTown.join(', ')}`;
        console.log(result);
    }
}
solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2 },
{ model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8 },
{ model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9 },
{ model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3 },
{ model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3 }])