function solve(input) {
    let gladiators = {};
    for (let line of input) {
        if (line == 'Ave Cesar') {
            break;
        } else if (line.includes(' -> ')) {
            let tokens = line.split(' -> ');
            let name = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
                gladiators[name][technique] = skill;
            } else {
                if (!gladiators[name].hasOwnProperty(technique)) {
                    gladiators[name][technique] = skill;
                } else {
                    if (gladiators[name][technique] < skill) {
                        gladiators[name][technique] = skill;
                    }
                }
            }
        } else {
            let tokens = line.split(' vs ');
            let gladiatorOne = tokens[0];
            let gladiatorTwo = tokens[1];
            if (gladiators.hasOwnProperty(gladiatorOne)
                && gladiators.hasOwnProperty(gladiatorTwo)) {
                let techniquesFirstGladiator = Object.keys(gladiators[gladiatorOne]);
                let techniquesSecondGladiator = Object.keys(gladiators[gladiatorTwo]);
                let found = false;
                for (let technique1 of techniquesFirstGladiator) {
                    for (let technique2 of techniquesSecondGladiator) {
                        if (technique1 == technique2) {
                            found = true;
                            let totalPoints1 = Object.values(gladiators[gladiatorOne]).reduce((a, b) => a + b);
                            let totalPoints2 = Object.values(gladiators[gladiatorTwo]).reduce((a, b) => a + b);
                            if (totalPoints1 > totalPoints2) {
                                delete gladiators[gladiatorTwo];
                            } else {
                                delete gladiators[gladiatorOne];
                            }
                            break;
                        }
                        if (found) {
                            break;
                        }
                    }
                }
            }
        }
    }
    let gladiatorsAndTotalPoints = {};
    for (let gladiator in gladiators) {
        let totalPoints = 0;
        for (let tech in gladiators[gladiator]) {
            totalPoints += Number(gladiators[gladiator][tech]);
        }
        gladiatorsAndTotalPoints[gladiator] = totalPoints;
    }
    gladiatorsAndTotalPoints = Object.entries(gladiatorsAndTotalPoints).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [name, total] of gladiatorsAndTotalPoints) {
        console.log(`${name}: ${total} skill`);
        let techniques = Object.entries(gladiators[name]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [tech, points] of techniques) {
            console.log(`- ${tech} <!> ${points}`);
        }
    }
}
solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar',
    'Gladius vs Gosho',
    'Gladius -> Shield -> 300'])
