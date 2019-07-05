function solve(input) {
    let racers = input.shift();
    let arrRacers = racers.split(' ');

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' ');
        let action = tokens[0];
        let racer = tokens[1];

        if (action === 'Join') {
            if (!arrRacers.includes(racer)) {
                arrRacers.push(racer);
            }
        } else if (action === 'Crash') {
            if (arrRacers.includes(racer)) {
                let index = arrRacers.indexOf(racer);
                arrRacers.splice(index, 1);
            }
        } else if (action === 'Pit') {
            if (arrRacers.includes(racer)) {
                let currentIndex = arrRacers.indexOf(racer);
                arrRacers.splice(currentIndex, 1);
                arrRacers.splice(currentIndex + 1, 0, racer);
            }
        } else if (action == 'Overtake') {
            if (arrRacers.includes(racer)) {
                let currentIndex = arrRacers.indexOf(racer);
                if (currentIndex > 0) {
                    arrRacers.splice(currentIndex, 1);
                    arrRacers.splice(currentIndex - 1, 0, racer);
                }
            }
        }
    }
    console.log(arrRacers.join(' ~ '));
}
solve(["Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"])
