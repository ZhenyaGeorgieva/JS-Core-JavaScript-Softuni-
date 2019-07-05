function focus() {
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(i => i.addEventListener('focus', onFocus));
    Array.from(inputs).forEach(i => i.addEventListener('blur', onBlur));

    function onFocus(event) {
        let input = event.target;
        input.parentNode.setAttribute('class', 'focused');
    }

    function onBlur(event) {
        let input = event.target;
        input.parentNode.removeAttribute('class');
    }
}