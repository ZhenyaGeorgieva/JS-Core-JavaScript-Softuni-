function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    let daysField = document.getElementById('days');
    let hoursField = document.getElementById('hours');
    let minutesField = document.getElementById('minutes');
    let secondsField = document.getElementById('seconds');



    daysButton.addEventListener('click', () => {
        let days = daysField.value;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        hoursField.value = hours;
        minutesField.value = minutes;
        secondsField.value = seconds;
    })

    hoursButton.addEventListener('click', () => {
        let hours = hoursField.value;
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        daysField.value = days;
        minutesField.value = minutes;
        secondsField.value = seconds;
    })

    minutesButton.addEventListener('click', () => {
        let minutes = minutesField.value;
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        daysField.value = days;
        hoursField.value = hours;
        secondsField.value = seconds;

    })

    secondsButton.addEventListener('click', () => {
        let seconds = secondsField.value;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        daysField.value = days;
        minutesField.value = minutes;
        hoursField.value = hours;
    })
}