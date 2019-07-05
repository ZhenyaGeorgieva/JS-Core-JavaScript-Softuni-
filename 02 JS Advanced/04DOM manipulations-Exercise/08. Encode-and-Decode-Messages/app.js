function encodeAndDecodeMessages() {
    let sendAndEncodeButton = document.getElementsByTagName('button')[0];
    let decodeAndReaditButton = document.getElementsByTagName('button')[1];

    let sendTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];

    sendAndEncodeButton.addEventListener('click', function () {
        let input = sendTextArea.value;
        let encodedMessage = '';

        for (let index = 0; index < input.length; index++) {
            encodedMessage+=String.fromCharCode(input[index].charCodeAt(0)+1);
        }
        console.log(encodedMessage)
        decodeTextArea.value=encodedMessage;
        sendTextArea.value='';
    });

    decodeAndReaditButton.addEventListener('click',function(){
        let input=decodeTextArea.value;
        let decodedMessage='';
        for (let index = 0; index < input.length; index++) {
            decodedMessage+=String.fromCharCode(input[index].charCodeAt(0)-1);
        }
        decodeTextArea.value=decodedMessage;
        console.log(decodedMessage);
    })
}