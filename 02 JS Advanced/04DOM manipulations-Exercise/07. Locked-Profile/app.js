function lockedProfile() {
    let buttonArr = Array.from(document.getElementsByTagName('button'));
    for (let button of buttonArr) {
        button.addEventListener('click', informationDisplay)
    }

    function informationDisplay(e) {
        let profile = e.target.parentNode;
        let unlockButton = profile.getElementsByTagName('input')[1];
        let hiddenInfoDiv = profile.getElementsByTagName('div')[0];
        let button=profile.getElementsByTagName('button')[0];

        console.log(unlockButton);
        if (unlockButton.checked && button.textContent == 'Show more') {
            button.textContent = 'Hide it';
            hiddenInfoDiv.style.display = 'block'
        } else if (unlockButton.checked && button.textContent == 'Hide it') {
            hiddenInfoDiv.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}