(() => {
    let mainElement = document.getElementById('allCats');
    let template = document.getElementById('cat-template');
    renderCatTemplate();

    function renderCatTemplate() {
        let catTemplate = template.innerHTML;
        let compiled = Handlebars.compile(catTemplate);
        let rendered = compiled({ cats: window.cats });

        mainElement.innerHTML = rendered;

        let buttonsArr = Array.from(document.getElementsByClassName('showBtn'));
        for (let button of buttonsArr) {
            button.addEventListener('click', showDetails);
        }
    }

    function showDetails(e) {
        let clickedButton = e.currentTarget;
        if (clickedButton.textContent == 'Show status code') {
            clickedButton.nextElementSibling.style.display = 'block';
            clickedButton.textContent = 'Hide status code';
        } else {
            clickedButton.nextElementSibling.style.display = 'none';
            clickedButton.textContent = 'Show status code';
        }
    }

})()
