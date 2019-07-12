function getInfo() {
    let requestedNumber = document.getElementById('stopId').value;
    let url = `https://judgetests.firebaseio.com/businfo/${requestedNumber}.json`;

    fetch(url)
        .then(data => data.json())
        .then(data => {
            let nameOfStop = data.name;
            let listOfBuses = data.buses;

            let stopNameElement = document.getElementById('stopName');
            stopNameElement.textContent = nameOfStop;

            let busesListElement = document.getElementById('buses');
            busesListElement.innerHTML = '';

            for (let tokens of Object.entries(listOfBuses)) {
                let busId = tokens[0];
                let time = tokens[1];

                let busElement = document.createElement('li');
                busElement.textContent = `Bus ${busId} arrives in ${time}`;
                busesListElement.appendChild(busElement);
            }
        })
        .catch(error => {
            let busesListElement = document.getElementById('buses');
            busesListElement.innerHTML = '';

            let stopNameElement = document.getElementById('stopName');
            stopNameElement.textContent = 'Error!';
        })
    document.getElementById('stopId').value = '';
}