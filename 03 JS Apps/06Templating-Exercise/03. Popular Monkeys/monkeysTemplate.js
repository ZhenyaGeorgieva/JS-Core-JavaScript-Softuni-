(() => {
    let mainElement = document.getElementsByClassName('monkeys')[0];

    let template = document.getElementById('monkey-template').innerHTML;
    let compile = Handlebars.compile(template);
    let rendered = compile({ monkeys: monkeys });
    mainElement.innerHTML = rendered;

    let buttonsArr = Array.from(document.getElementsByTagName('button'));
    for (let button of buttonsArr) {
        button.addEventListener('click', showInfo);
    }

    function showInfo(e) {
        let pressedBtn = e.currentTarget;
        let elementToShow = pressedBtn.nextElementSibling;
        if(pressedBtn.textContent=='Info'){
        elementToShow.style.display = 'block';
        pressedBtn.textContent='Hide'
        }else{
            elementToShow.style.display = 'none';
            pressedBtn.textContent='Info'
        }
    }
})()