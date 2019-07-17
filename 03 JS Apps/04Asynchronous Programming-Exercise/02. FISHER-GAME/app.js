(() => {
    let catchesElement = document.getElementById('catches');
    
    let loadBtn = document.getElementsByClassName('load')[0];
    loadBtn.addEventListener('click', loadCatches);

    let addBtn = document.getElementsByClassName('add')[0];
    addBtn.addEventListener('click', createElement);

    function createTemplateElement(dataId, anglerValue, weightValue, speciesValue, locationValue, baitValue, captureTimeValue) {
        let divCatch = document.createElement('div');
        divCatch.classList.add('catch');
        divCatch.setAttribute('data-id', dataId);

        let labelAngler = document.createElement('label');
        labelAngler.textContent = 'Angler';
        divCatch.appendChild(labelAngler);

        let inputAngler = document.createElement('input');
        inputAngler.setAttribute('type', 'text');
        inputAngler.classList.add('angler');
        inputAngler.setAttribute('value', anglerValue);
        divCatch.appendChild(inputAngler);

        divCatch.innerHTML += '<hr>';

        let labelWeight = document.createElement('label');
        labelWeight.textContent = 'Weight';
        divCatch.appendChild(labelWeight);

        let inputWeight = document.createElement('input');
        inputWeight.setAttribute('type', 'text');
        inputWeight.classList.add('weight');
        inputWeight.setAttribute('value', weightValue);
        divCatch.appendChild(inputWeight);

        divCatch.innerHTML += '<hr>';

        let labelSpecies = document.createElement('label');
        labelSpecies.textContent = 'Species';
        divCatch.appendChild(labelSpecies);

        let inputSpecies = document.createElement('input');
        inputSpecies.setAttribute('type', 'text');
        inputSpecies.classList.add('species');
        inputSpecies.setAttribute('value', speciesValue);
        divCatch.appendChild(inputSpecies);

        divCatch.innerHTML += '<hr>';

        let labelLocation = document.createElement('label');
        labelLocation.textContent = 'Location';
        divCatch.appendChild(labelLocation);

        let inputLocation = document.createElement('input');
        inputLocation.setAttribute('type', 'text');
        inputLocation.classList.add('location');
        inputLocation.setAttribute('value', locationValue);
        divCatch.appendChild(inputLocation);

        divCatch.innerHTML += '<hr>';

        let labelBait = document.createElement('label');
        labelBait.textContent = 'Bait';
        divCatch.appendChild(labelBait);

        let inputBait = document.createElement('input');
        inputBait.setAttribute('type', 'text');
        inputBait.classList.add('bait');
        inputBait.setAttribute('value', baitValue);
        divCatch.appendChild(inputBait);

        divCatch.innerHTML += '<hr>';

        let labelCaptureTime = document.createElement('label');
        labelCaptureTime.textContent = 'Capture Time';
        divCatch.appendChild(labelCaptureTime);

        let inputCaptureTime = document.createElement('input');
        inputCaptureTime.setAttribute('type', 'text');
        inputCaptureTime.classList.add('captureTime');
        inputCaptureTime.setAttribute('value', captureTimeValue);
        divCatch.appendChild(inputCaptureTime);

        divCatch.innerHTML += '<hr>';

        let updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.classList.add('update');
        updateBtn.addEventListener('click', updateCatch);
        divCatch.appendChild(updateBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', deleteCatch);
        divCatch.appendChild(deleteBtn);

        document.getElementById('catches').appendChild(divCatch);
    }

    catchesElement.innerHTML = '';

    function loadCatches() {
        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(validate)
            .then((response) => response.json())
            .then(printAllCatches);
    }

    function printAllCatches(data) {
        document.getElementById('catches').innerHTML = '';
        for (let key of Object.keys(data)) {
            let dataId = key;
            let anglerValue = data[key].angler;
            let weightValue = data[key].weight;
            let speciesValue = data[key].species;
            let locationValue = data[key].location;
            let baitValue = data[key].bait;
            let captureTimeValue = data[key].captureTime;

            createTemplateElement(dataId, anglerValue, weightValue, speciesValue, locationValue, baitValue, captureTimeValue);
        }
    }

    function createElement() {
        let inputValues = document.getElementById('addForm').children;
        let anglerValue = inputValues[2].value;
        let weightValue = inputValues[4].value;
        let speciesValue = inputValues[6].value;
        let locationValue = inputValues[8].value;
        let baitValue = inputValues[10].value;
        let captureTimeValue = inputValues[12].value;

        let data = {
            angler: anglerValue,
            weight: weightValue,
            species: speciesValue,
            location: locationValue,
            bait: baitValue,
            captureTime: captureTimeValue
        };
        let headers = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch('https://fisher-game.firebaseio.com/catches.json', headers)
            .then(validate)
            .then((response) => response.json)
            .then((data) => {
                loadBtn.click();
            })

        inputValues[2].value = '';
        inputValues[4].value = '';
        inputValues[6].value = '';
        inputValues[8].value = '';
        inputValues[10].value = '';
        inputValues[12].value = '';
    }

    function updateCatch(event) {
        let elementToUpdate = event.currentTarget.parentNode;
        let elementToUpdateId = event.currentTarget.parentNode.getAttribute('data-id');

        let inputValues = elementToUpdate.children;
        let anglerValue = inputValues[1].value;
        let weightValue = inputValues[4].value;
        let speciesValue = inputValues[7].value;
        let locationValue = inputValues[10].value;
        let baitValue = inputValues[13].value;
        let captureTimeValue = inputValues[16].value;

        let data = {
            angler: anglerValue,
            weight: weightValue,
            species: speciesValue,
            location: locationValue,
            bait: baitValue,
            captureTime: captureTimeValue
        };

        let headers = {
            method: 'PUT',
            body: JSON.stringify(data)
        }

        fetch(`https://fisher-game.firebaseio.com/catches/${elementToUpdateId}.json`, headers)
            .then(validate)
            .then((response) => response.json)
            .then((data) => {
                loadBtn.click();
            })
    }

    function deleteCatch(event) {
        let elementToDelete = event.currentTarget.parentNode;
        let elementToDeleteId = elementToDelete.getAttribute('data-id');

        let headers = {
            method: 'DELETE'
        }

        fetch(`https://fisher-game.firebaseio.com/catches/${elementToDeleteId}.json`, headers)
            .then(validate)
            .then((data) => {
                loadBtn.click();
            })
    }

    function validate(response) {
        if (response.status > 400) {
            throw new Error(`Error occured! Error: ${response.statusText}`)
        }
        return response;
    }
})();

