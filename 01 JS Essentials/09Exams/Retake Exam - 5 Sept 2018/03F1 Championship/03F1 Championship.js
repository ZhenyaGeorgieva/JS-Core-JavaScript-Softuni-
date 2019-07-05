function solve(input) {
    let teams = {};

    for (let line of input) {
        let tokens = line.split(' -> ');
        let teamName = tokens[0];
        let racer = tokens[1];
        let points = Number(tokens[2]);

        if (!teams.hasOwnProperty(teamName)) {
            teams[teamName] = {};
            teams[teamName][racer] = points;
        } else {
            if (!teams[teamName].hasOwnProperty(racer) && Object.keys(teams[teamName]).length < 2) {
                teams[teamName][racer] = points;
            } else {
                teams[teamName][racer] += points;
            }
        }
    }
    let teamsTotalPoints = {};

    for (let [teamName, racers] of Object.entries(teams)) {

        let totalPoints = Object.values(racers).map(x => Number(x)).reduce((a, b) => a + b);
        teamsTotalPoints[teamName] = totalPoints;
    }
    let sorted = Object.entries(teamsTotalPoints).sort((a, b) => b[1] - a[1]);
    let counter = 0;

    for (let [teamName, totalPoints] of sorted) {
        console.log(`${teamName}: ${totalPoints}`);
        let racers = teams[teamName];
        let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
        for (let [racerName, points] of sortedRacers) {
            console.log(`-- ${racerName} -> ${points}`);
        }
        counter++;
        if (counter == 3) {
            break;
        }
    }

}
solve(['Ferrari -> Kimi Raikonnen -> 25',
    'Ferrari -> Sebastian Vettel -> 18',
    'Mercedes -> Lewis Hamilton -> 10',
    'Mercedes -> Valteri Bottas -> 8',
    'Red Bull -> Max Verstapen -> 6',
    'Red Bull -> Daniel Ricciardo -> 4',
    'Mercedes -> Lewis Hamilton -> 25',
    'Mercedes -> Valteri Bottas -> 18',
    'Haas -> Romain Grosjean -> 25',
    'Haas -> Kevin Magnussen -> 25'])