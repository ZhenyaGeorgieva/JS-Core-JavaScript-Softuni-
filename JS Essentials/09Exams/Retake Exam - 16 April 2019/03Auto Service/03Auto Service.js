function solve(input) {
    let models = {};
    for (let line of input) {
        if (line.includes('repair')) {
            let tokens = line.split(' ');
            let modelToRepair = tokens[1];
            let initialPartsToRepair = JSON.parse(tokens[2]);
            let partsToRepair = Object.entries(initialPartsToRepair);

            if (models.hasOwnProperty(modelToRepair)
                && models[modelToRepair].hasOwnProperty('instructions')) {
                for (let [partToRepair, condition] of partsToRepair) {
                    if (condition == 'broken') {
                        if (models[modelToRepair].hasOwnProperty('parts')
                            && models[modelToRepair].parts.hasOwnProperty(partToRepair)) {
                            let numOfReplacedPart = models[modelToRepair].parts[partToRepair].shift();
                            initialPartsToRepair[partToRepair] = numOfReplacedPart;
                        }
                    }
                }
                console.log(`${modelToRepair} client - ${JSON.stringify(initialPartsToRepair)}`);
            } else {
                console.log(`${modelToRepair} is not supported`);
            }
        } else if (line.includes('instructions')) {
            let model = line.split(' ')[1];

            if (!models.hasOwnProperty(model)) {
                models[model] = {};
                models[model].instructions = 'yes';
            } else {
                models[model].instructions = 'yes';
            }
        } else if (line.includes('addPart')) {
            let model = line.split(' ')[1];
            let part = line.split(' ')[2];
            let number = line.split(' ')[3];
            if (!models.hasOwnProperty(model)) {
                models[model] = {};
                models[model].parts = {};
                models[model].parts[part] = [];
                models[model].parts[part].push(number);
            } else {
                if (!models[model].hasOwnProperty('parts')) {
                    models[model].parts = {};
                    models[model].parts[part] = [];
                    models[model].parts[part].push(number);
                } else {
                    if (!models[model].parts.hasOwnProperty(part)) {
                        models[model].parts[part] = [];
                        models[model].parts[part].push(number);
                    } else {
                        models[model].parts[part].push(number);
                    }
                }
            }
        }
    }
    let modelsKeys = Object.keys(models).sort((a, b) => a.localeCompare(b));
    for (let model of modelsKeys) {
        let name = model;
        if (models[name].hasOwnProperty('parts')) {
            let parts = JSON.stringify(models[name].parts);
            console.log(`${name} - ${parts}`);
        }
    }
}
solve([
    'instructions bmw',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'])