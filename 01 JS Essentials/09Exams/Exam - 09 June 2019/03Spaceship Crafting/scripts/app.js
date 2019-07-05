function spaceshipCrafting() {
	let inputFields = Array.from(document.getElementsByTagName('input'));
	let quantityInput = [];
	
	for (let input of inputFields) {
		quantityInput.push(Number(input.value));
	}
	
	let percentage = quantityInput.pop();
	let percentagePerMaterial = percentage / 4;
	let numberToMultiply = (100 - percentagePerMaterial) / 100;

	let finalBarsMaterial = quantityInput
		.map(x => x * numberToMultiply)
		.map(x => Math.round(x));

	let titaniumBars = Number(finalBarsMaterial[0]) / 25;
	let aluminiumBars = Number(finalBarsMaterial[1]) / 50;
	let magnesiumBars = Number(finalBarsMaterial[2]) / 75;
	let carbonBars = Number(finalBarsMaterial[3]) / 100;

	let finalBars = [];
	finalBars.push(Math.round(titaniumBars));
	finalBars.push(Math.round(aluminiumBars));
	finalBars.push(Math.round(magnesiumBars));
	finalBars.push(Math.round(carbonBars));

	let barsObj = {};
	barsObj.titanium = finalBars[0];
	barsObj.aluminium = finalBars[1];
	barsObj.magnesium = finalBars[2];
	barsObj.carbon = finalBars[3];

	let ships = {};
	ships.THEUNDEFINEDSHIP = 0;
	ships.NULLMASTER = 0;
	ships.JSONCREW = 0;
	ships.FALSEFLEET = 0;

	for (let index = 0; index < 1000; index++) {

		if (barsObj.titanium <= 0
			|| barsObj.aluminium <= 0
			|| barsObj.magnesium <= 0
			|| barsObj.carbon <= 0) {
			break;
		}
		
		if (barsObj.titanium >= 7
			&& barsObj.aluminium >= 9
			&& barsObj.magnesium >= 7
			&& barsObj.carbon >= 7) {
			barsObj.titanium -= 7;
			barsObj.aluminium -= 9;
			barsObj.magnesium -= 7;
			barsObj.carbon -= 7;
			ships.THEUNDEFINEDSHIP += 1;
		}
		
		if (barsObj.titanium >= 5
			&& barsObj.aluminium >= 7
			&& barsObj.magnesium >= 7
			&& barsObj.carbon >= 5) {
			barsObj.titanium -= 5;
			barsObj.aluminium -= 7;
			barsObj.magnesium -= 7;
			barsObj.carbon -= 5;
			ships.NULLMASTER += 1;
		}
		
		if (barsObj.titanium >= 3
			&& barsObj.aluminium >= 5
			&& barsObj.magnesium >= 5
			&& barsObj.carbon >= 2) {
			barsObj.titanium -= 3;
			barsObj.aluminium -= 5;
			barsObj.magnesium -= 5;
			barsObj.carbon -= 2;
			ships.JSONCREW += 1;
		}

		if (barsObj.titanium >= 2
			&& barsObj.aluminium >= 2
			&& barsObj.magnesium >= 3
			&& barsObj.carbon >= 1) {
			barsObj.titanium -= 2;
			barsObj.aluminium -= 2;
			barsObj.magnesium -= 3;
			barsObj.carbon -= 1;
			ships.FALSEFLEET += 1;
		}
	}

	let resultShips = [];
	
	if (ships.THEUNDEFINEDSHIP > 0) {
		resultShips.push(`${ships.THEUNDEFINEDSHIP} THE-UNDEFINED-SHIP`);
	}
	
	if (ships.NULLMASTER > 0) {
		resultShips.push(`${ships.NULLMASTER} NULL-MASTER`);
	}
	
	if (ships.JSONCREW > 0) {
		resultShips.push(`${ships.JSONCREW} JSON-CREW`);
	}
	
	if (ships.FALSEFLEET > 0) {
		resultShips.push(`${ships.FALSEFLEET} FALSE-FLEET`);
	};

	let resultBars = [];
	let quantityTitanium = barsObj.titanium;
	let quantityAluminium = barsObj.aluminium;
	let quantityMagnesium = barsObj.magnesium;
	let quantityCarbon = barsObj.carbon;

	resultBars.push(`${quantityTitanium} titanium bars`);
	resultBars.push(`${quantityAluminium} aluminum bars`);
	resultBars.push(`${quantityMagnesium} magnesium bars`);
	resultBars.push(`${quantityCarbon} carbon bars`);

	let resultSections = document.getElementsByTagName('p');
	let barsSection = resultSections[0];
	let shipsSection = resultSections[1];
	barsSection.textContent = resultBars.join(', ');
	shipsSection.textContent = resultShips.join(', ');
}