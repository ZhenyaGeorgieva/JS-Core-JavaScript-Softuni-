function getData() {
	let peopleIn = [];
	let peopleOut = [];
	let blackList = [];
	let textArea = Array.from(JSON.parse(document.getElementsByTagName('textarea')[0].value));
	let sortCommand = textArea.pop();
	
	for (let tokens of textArea) {
		let firstName = tokens.firstName;
		let lastName = tokens.lastName;
		let action = tokens.action;

		if (action == 'peopleIn') {
			let findInBlackList = blackList.find(x => x.firstName == firstName && x.lastName == lastName);
			if (!findInBlackList) {
				let newObj = {};
				newObj.firstName = firstName;
				newObj.lastName = lastName;
				peopleIn.push(newObj);
			}
		} else if (action == 'peopleOut') {
			let findInPeopleIn = peopleIn.find(x => x.firstName == firstName && x.lastName == lastName);
			if (findInPeopleIn) {
				let index = peopleIn.indexOf(findInPeopleIn);
				peopleIn.splice(index, 1);
				peopleOut.push(findInPeopleIn);
			}
		} else if (action == 'blacklist') {
			let newObj = {};
			newObj.firstName = firstName;
			newObj.lastName = lastName;
			blackList.push(newObj);
			let findInPeopleIn = peopleIn.find(x => x.firstName == firstName && x.lastName == lastName);
			if (findInPeopleIn) {
				let index = peopleIn.indexOf(findInPeopleIn);
				peopleIn.splice(index, 1);
				peopleOut.push(findInPeopleIn);
			}
		}
	}
	if (sortCommand.criteria && sortCommand.action) {
		let criteria = sortCommand.criteria;
		let action = sortCommand.action;
		if (action == 'peopleIn') {
			peopleIn = peopleIn.sort((a, b) => a[criteria].localeCompare(b[criteria]));
		} else if (action == 'peopleOut') {
			peopleOut = peopleOut.sort((a, b) => a[criteria].localeCompare(b[criteria]));
		} else if (action == 'blacklist') {
			blackList = blackList.sort((a, b) => a[criteria].localeCompare(b[criteria]));
		}
	}
	let paragraphs = document.getElementsByTagName('p');

	console.log(peopleIn);
	console.log(peopleIn.map(x => JSON.stringify(x)));
	
	let resultIn = peopleIn.map(x => JSON.stringify(x)).join(' ');
	let resultOut = peopleOut.map(x => JSON.stringify(x)).join(' ');
	let resultBlack = blackList.map(x => JSON.stringify(x)).join(' ');

	paragraphs[0].textContent = resultIn;
	paragraphs[1].textContent = resultBlack;
	paragraphs[2].textContent = resultOut;
}