function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', calculateDistance);

    function calculateDistance() {
        let inputValue = document.getElementById('inputDistance');
        let numberToConvert = Number(inputValue.value);
        let inputUnit = document.getElementById('inputUnits').value;
        let numberInMeters;
        if (inputUnit == 'km') {
            numberInMeters = numberToConvert * 1000;
        } else if (inputUnit == 'm') {
            numberInMeters = numberToConvert*1;
        } else if (inputUnit == 'cm') {
            numberInMeters = numberToConvert * 0.01;
        } else if (inputUnit == 'mm') {
            numberInMeters = numberToConvert * 0.001;
        } else if (inputUnit == 'mi') {
            numberInMeters = numberToConvert * 1609.34;
        } else if (inputUnit == 'yrd') {
            numberInMeters = numberToConvert * 0.9144;
        } else if (inputUnit == 'ft') {
            numberInMeters = numberToConvert * 0.3048;
        } else if (inputUnit == 'in') {
            numberInMeters = numberToConvert * 0.0254;
        }
        console.log(numberInMeters);

        let result;

        let outputField = document.getElementById('outputDistance');
        let outputUnit = document.getElementById('outputUnits').value;
        if (outputUnit == 'km') {
            result = numberInMeters / 1000;
        } else if (outputUnit == 'm') {
            result = numberInMeters/1;
        } else if (outputUnit == 'cm') {
            result = numberInMeters / 0.01;
        } else if (outputUnit == 'mm') {
            result = numberInMeters / 0.001;
        } else if (outputUnit == 'mi') {
            result = numberInMeters / 1609.34;
        } else if (outputUnit == 'yrd') {
            result = numberInMeters / 0.9144;
        } else if (outputUnit == 'ft') {
            result = numberInMeters / 0.3048;
        } else if (outputUnit == 'in') {
            result = numberInMeters / 0.0254;
        }
        outputField.value = result;
        console.log(result)
    }
}