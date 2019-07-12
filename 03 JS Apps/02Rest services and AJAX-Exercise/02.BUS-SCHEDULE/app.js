function solve() {
    let currentId = 'depot';
    let currentStopObj = '';

    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(data => data.json())
            .then(data => {
                let infoElement = document
                    .getElementById('info')
                    .getElementsByTagName('span')[0];

                infoElement.textContent = `Next stop ${data.name}`;
                currentStopObj = data;
                currentId = data.next;

                document.getElementById('depart').setAttribute('disabled', true);
                document.getElementById('arrive').disabled = false;
            })
    }

    function arrive() {
        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;

        let name = currentStopObj.name;
        currentId = currentStopObj.next;

        let infoElement = document
            .getElementById('info')
            .getElementsByTagName('span')[0];
        infoElement.textContent = `Arriving at ${name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();