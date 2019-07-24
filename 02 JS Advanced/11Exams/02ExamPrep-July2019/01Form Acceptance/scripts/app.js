function acceptance() {
	let addButton = document.getElementById('acceptance');
	addButton.addEventListener('click', addProduct);

	let inputFields = document.getElementById('fields').getElementsByTagName('input');
	console.log(inputFields)
	function addProduct() {
		let companyName = inputFields[0].value;
		let productName = inputFields[1].value;
		let quantity = inputFields[2].value;
		let scrapeQuantity = inputFields[3].value;

		if (companyName && productName && quantity && scrapeQuantity
			&& !isNaN(quantity) && !isNaN(scrapeQuantity)) {

			let quantityToAdd = Number(quantity) - Number(scrapeQuantity);

			if (quantityToAdd > 0) {
				let warehouse = document.getElementById('warehouse');
				let div = document.createElement('div');
				let p = document.createElement('p');
				p.textContent = `[${companyName}] ${productName} - ${quantityToAdd} pieces`;
				div.appendChild(p);

				let button = document.createElement('button');
				button.type = 'button';
				button.textContent = 'Out of stock';
				div.appendChild(button);

				warehouse.appendChild(div);

				button.addEventListener('click', (e) => {
					e.target.parentNode.remove();
				})
			}
		}
		inputFields[0].value = '';
		inputFields[1].value = '';
		inputFields[2].value = '';
		inputFields[3].value = '';
	}
}