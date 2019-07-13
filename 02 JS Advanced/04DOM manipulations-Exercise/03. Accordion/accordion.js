function toggle() {
    let button = document.querySelector('.button');
    let textElement = document.getElementById('extra');
    if (button.textContent == 'More') {
        textElement.style.display = 'block';
        button.textContent = 'Less';
    } else {
        textElement.style.display = 'none';
        button.textContent = 'More';
    }
}