function solve(a, b) {
    let text = document.getElementById('text').value;
    let step = Number(document.getElementById('number').value);

    let result = [];
    if (step <= text.length) {
        if (text.length % step == 0) {
            for (let index = 0; index < text.length; index += step) {
                let slicedPart = text.slice(index, index + step);
                result.push(slicedPart);
            }
        } else {
            let slicedPartsCount = parseInt(text.length / step) + 1;
            console.log(slicedPartsCount);
            text += text;
            for (let index = 0; index < text.length; index += step) {

                let slicedPart = text.slice(index, index + step);

                if (slicedPartsCount > 0) {
                    result.push(slicedPart);
                }
                slicedPartsCount--;
            }
        }
        result = result.join(' ');
    } else {
        let partsCount = parseInt(step / text.length);
        if (step % text.length == 0) {
            for (let index = 0; index < partsCount; index++) {
                result += text;
            }
        } else {
            partsCount++;
            for (let index = 0; index < partsCount; index++) {
                text += text;
            }
            for (let index = 0; index < partsCount; index += step) {
                result += text.slice(index, index + step)
            }
        }
    }
    let resultElement = document.getElementById('result');

    resultElement.innerHTML = result;
}
