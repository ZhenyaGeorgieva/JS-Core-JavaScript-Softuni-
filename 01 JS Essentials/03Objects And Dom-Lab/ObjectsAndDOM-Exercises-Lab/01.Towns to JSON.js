function solve(input) {
    let towns = [];
    for (let index = 1; index < input.length; index++) {
        let tokens = input[index].split("|");
        let townName = tokens[1].trim();
        let latitude = Number(tokens[2].trim());
        let longitude = Number(tokens[3].trim());
        let currentTown = {
            Town: townName,
            Latitude: latitude,
            Longitude: longitude
        };
        towns.push(currentTown);
    }
    let resultJSON = JSON.stringify(towns);
    console.log(resultJSON);
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
