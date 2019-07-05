function solve(kingdomsInfo, battles) {
    let kingdoms = {};
    
    for (let line of kingdomsInfo) {
        let kingdomName = line.kingdom;
        let generalName = line.general;
        let armyCount = line.army;

        if (!kingdoms.hasOwnProperty(kingdomName)) {
            kingdoms[kingdomName] = {};
            kingdoms[kingdomName][generalName] = {};
            kingdoms[kingdomName][generalName].army = armyCount;
            kingdoms[kingdomName][generalName].wins = 0;
            kingdoms[kingdomName][generalName].losses = 0;
        } else {
           
            if (!kingdoms[kingdomName].hasOwnProperty(generalName)) {
                kingdoms[kingdomName][generalName] = {};
                kingdoms[kingdomName][generalName].army = armyCount;
                kingdoms[kingdomName][generalName].wins = 0;
                kingdoms[kingdomName][generalName].losses = 0;
            } else {
                kingdoms[kingdomName][generalName].army += armyCount;
            }
        }
    }

    for (let battle of battles) {
        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];
        
        if (attackingKingdom != defendingKingdom) {
            let attackingArmy = kingdoms[attackingKingdom][attackingGeneral].army;
            let defendingArmy = kingdoms[defendingKingdom][defendingGeneral].army;
            
            if (attackingArmy > defendingArmy) {
                kingdoms[attackingKingdom][attackingGeneral].wins += 1;
                kingdoms[defendingKingdom][defendingGeneral].losses += 1;
                attackingArmy = Math.floor(attackingArmy * 1.1);
                kingdoms[attackingKingdom][attackingGeneral].army = attackingArmy;
                defendingArmy = Math.floor(defendingArmy * 0.9);
                kingdoms[defendingKingdom][defendingGeneral].army = defendingArmy;
            } else if (attackingArmy < defendingArmy) {
                kingdoms[attackingKingdom][attackingGeneral].losses += 1;
                kingdoms[defendingKingdom][defendingGeneral].wins += 1;
                attackingArmy = Math.floor(attackingArmy * 0.9);
                kingdoms[attackingKingdom][attackingGeneral].army = attackingArmy;
                defendingArmy = Math.floor(defendingArmy * 1.1);
                kingdoms[defendingKingdom][defendingGeneral].army = defendingArmy;
            }
        }
    }
    
    let totalWinsAndLosses = {};
    for (let kingdom in kingdoms) {
        let wins;
        let losses;
        totalWinsAndLosses[kingdom] = {};
        
        if (Object.values(kingdoms[kingdom]).length > 1) {
            wins = Object.values(kingdoms[kingdom]).reduce((a, b) => a.wins + b.wins);
            losses = Object.values(kingdoms[kingdom]).reduce((a, b) => a.losses + b.losses);
        }
        else {
            wins = Object.values(kingdoms[kingdom])[0].wins;
            losses = Object.values(kingdoms[kingdom])[0].losses;
        }
        totalWinsAndLosses[kingdom].wins = wins;
        totalWinsAndLosses[kingdom].losses = losses;
    }
    
    let bestKingdom = Object.entries(totalWinsAndLosses).sort((a, b) =>
        b[1].wins - a[1].wins || a[1].losses - b[1].losses || a[0].localeCompare(b[0]))[0][0];

    console.log(`Winner: ${bestKingdom}`);
    let sortedKingdom = Object.entries(kingdoms[bestKingdom]).sort((a, b) => b[1].army - a[1].army);

    for (let [general, details] of sortedKingdom) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${details.army}`);
        console.log(`---wins: ${details.wins}`);
        console.log(`---losses: ${details.losses}`);
    }
}
solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]])