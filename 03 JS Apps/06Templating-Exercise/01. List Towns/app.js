function solve() {
    let inputField = document.getElementById('towns');

    let loadBtn = document.getElementById('btnLoadTowns');
    loadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadTowns()
    });

    function loadTowns() {
        if (inputField.value) {
            let towns = inputField.value;
            towns = towns.split(', ').map(e => {
                return { name: e }
            });
            let template = document.getElementById('towns-template').innerHTML;
            let compiled = Handlebars.compile(template);
            let rendered = compiled({ towns: towns });

            document.getElementById('root').innerHTML = rendered;
            inputField.value = '';
        }
    }
}
solve();