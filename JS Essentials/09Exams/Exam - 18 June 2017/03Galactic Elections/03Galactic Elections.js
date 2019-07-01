function solve(input) {
    let systems = {};
    let systemsBestCand = {};

    for (let line of input) {
        let systemName = line.system;
        let candidate = line.candidate;
        let votes = line.votes;

        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = [];
            let newObj = {};
            newObj.candidate = candidate;
            newObj.votes = votes;
            systems[systemName].push(newObj);
        } else {
            if (!systems[systemName].find(x => x.candidate == candidate)) {
                let newObj = {};
                newObj.candidate = candidate;
                newObj.votes = votes;
                systems[systemName].push(newObj);
            } else {
                let obj = systems[systemName].find(x => x.candidate == candidate);
                obj.votes += votes;
            }
        }
    }

    for (let system of Object.keys(systems)) {
        let systemName = system;
        let canditatesArr = systems[systemName];

        if (canditatesArr.length == 1) {
            systemsBestCand[systemName] = {};
            systemsBestCand[systemName].name = canditatesArr[0].candidate;
            systemsBestCand[systemName].votes = canditatesArr[0].votes;
        } else if (canditatesArr.length > 1) {
            let sorted = canditatesArr.sort((a, b) => b.votes - a.votes);
            let bestCandidateName = sorted[0].candidate;
            let votesToAdd = sorted[0].votes;
            for (let index = 1; index < sorted.length; index++) {
                votesToAdd += Number(sorted[index].votes);
            }
            systemsBestCand[systemName] = {};
            systemsBestCand[systemName].name = bestCandidateName;
            systemsBestCand[systemName].votes = votesToAdd;
        }
    }

    let votesObj = Object.values(systemsBestCand);
    let totalVotes = 0;

    for (let obj of votesObj) {
        totalVotes += obj.votes;
    }

    let bestCandidatesSorted = Object.values(systemsBestCand).sort((a, b) => b.votes - a.votes);
    let bestCandidateVotes = bestCandidatesSorted[0].votes;
    console.log(totalVotes);
    console.log(bestCandidatesSorted)

    if (bestCandidateVotes > totalVotes / 2) {
        let secondCandidateName = bestCandidatesSorted[1].name;

        if (secondCandidateName != bestCandidatesSorted[0].name) {
            console.log(`${bestCandidatesSorted[0].name} wins with ${bestCandidatesSorted[0].votes} votes`);
            console.log(`Runner up: ${bestCandidatesSorted[1].name}`);
            for (let [planet, winnerInfo] of Object.entries(systemsBestCand).sort((a, b) => b[1].votes - a[1].votes)) {
                if (winnerInfo.name == secondCandidateName) {
                    console.log(`${planet}: ${winnerInfo.votes}`);
                }
            }
        } else {
            let total = 0;

            for (let line of bestCandidatesSorted) {
                total += line.votes;
            }
            console.log(`${bestCandidatesSorted[0].name} wins with ${total} votes`);
            console.log(`${bestCandidatesSorted[0].name} wins unopposed!`);
        }
    } else {
        let runOffInfo = {};
        let totalRunOff = 0;
        for (let line of bestCandidatesSorted) {
            let name = line.name;
            let votes = line.votes;
            if (!runOffInfo.hasOwnProperty(name)) {
                runOffInfo[name] = votes;
                totalRunOff += votes;
            } else {
                runOffInfo[name] += votes;
                totalRunOff += votes;
            }
        }

        let firstPretendentName = Object.entries(runOffInfo)[0][0];
        let firstPretendentPercents = Math.floor((Object.entries(runOffInfo)[0][1] / totalRunOff) * 100);
        let secondPretendent = Object.entries(runOffInfo)[1][0];
        let secondPretendentPercents = Math.floor((Object.entries(runOffInfo)[1][1] / totalRunOff) * 100);

        console.log(`Runoff between ${firstPretendentName} with ${firstPretendentPercents}% and ${secondPretendent} with ${secondPretendentPercents}%`);
    }
}
solve([{ system: 'Theta', candidate: 'Kitler', votes: 50 },
{ system: 'Theta', candidate: 'Space Cow', votes: 45 },
{ system: 'Theta', candidate: 'Huge Manatee', votes: 45 },
{ system: 'Theta', candidate: 'Flying Shrimp', votes: 45 },
{ system: 'Tau', candidate: 'Kitler', votes: 50 },
{ system: 'Tau', candidate: 'Space Cow', votes: 60 },
{ system: 'Sigma', candidate: 'Kitler', votes: 50 },
{ system: 'Sigma', candidate: 'Huge Manatee', votes: 60 },
{ system: 'Omicron', candidate: 'Kitler', votes: 50 }])