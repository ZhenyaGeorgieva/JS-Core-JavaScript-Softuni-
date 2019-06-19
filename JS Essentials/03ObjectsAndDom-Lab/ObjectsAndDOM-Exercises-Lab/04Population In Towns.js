function solve(input) {
    let townsPopulation = {};

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(" <-> ");
        let currentTownName = tokens[0];
        let currentTownPolulation = Number(tokens[1]);
      
        if (!townsPopulation.hasOwnProperty(currentTownName)) {
            townsPopulation[currentTownName] = currentTownPolulation;
        } else {
            townsPopulation[currentTownName] += currentTownPolulation
        }
    }

    for (const key in townsPopulation) {
        let town = key;
        let population = townsPopulation[key];
        console.log(`${town} : ${population}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])