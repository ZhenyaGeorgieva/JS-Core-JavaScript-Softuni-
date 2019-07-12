function loadRepos() {
	let resultElement = document.getElementById('repos');
	let firstChild = resultElement.children[0];
	firstChild.remove();

	const statusChecker = {
		isSuccess: (status) => status === 200,
	};

	const toDomElement = ({ name, link }) => {
		const listItem = document.createElement('li');
		const linkItem = document.createElement('a');
		linkItem.href = link;
		linkItem.innerHTML = name;
		listItem.appendChild(linkItem);
		return listItem;
	};

	const parseRepo = ({ html_url, full_name }) => {
		return { link: html_url, name: full_name };
	}

	let name = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${name}/repos`)
		.then(response => response.json())
		.then(repos => {
			repos.map(parseRepo)
				.map(toDomElement)
				.forEach(el => {
					resultElement.appendChild(el)
				})
		})
}