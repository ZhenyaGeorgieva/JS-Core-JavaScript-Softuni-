function solve(input) {
    let countries = {};

    for (let line of input) {
        let tokens = line.split(' > ');
        let country = tokens[0];
        let town = tokens[1];
        let townArr = town.split('');
        let firstLetter = townArr.shift().toUpperCase();
        townArr.unshift(firstLetter);
        town = townArr.join('');
        let value = tokens[2];

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][town] = value;
        } else {
            if (!countries[country].hasOwnProperty(town)) {
                countries[country][town] = value;
            } else {
                if (countries[country][town] > value) {
                    countries[country][town] = value;
                }
            }
        }
    }

    let sorted = Object.keys(countries).sort((a, b) => a.localeCompare(b));
    for (let country of sorted) {
        let resultToPrint = '';
        resultToPrint += `${country} -> `;
        let towns = Object.entries(countries[country]).sort((a, b) => a[1] - b[1]);

        for (let [town, price] of towns) {
            resultToPrint += `${town} -> ${price} `;
        }
        console.log(resultToPrint);
    }
}

solve(["Bulgaria > sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
    "Albania > Sofia > 1000"])