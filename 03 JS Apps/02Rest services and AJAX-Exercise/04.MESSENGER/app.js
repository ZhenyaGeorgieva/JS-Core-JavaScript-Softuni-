function attachEvents() {
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submitInfo);

    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refreshInfo);

    let url = 'https://rest-messanger.firebaseio.com/messanger.json';

    function submitInfo() {
        let authorName = document.getElementById('author').value;
        let messageContent = document.getElementById('content').value;

        let obj = {};
        obj.author = authorName;
        obj.content = messageContent;

        fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(data => console.log(data.json()))
            .catch(error => console.log(error));

        document.getElementById('author').value = '';
        document.getElementById('content').value = '';
    }

    function refreshInfo() {
        let messagesElement = document.getElementById('messages');
        fetch(url)
            .then(data => data.json())
            .then(data => {
                let result = [];
                for (let tokens of Object.values(data)) {
                        result.push(`${tokens.author}: ${tokens.content}`)
                }
                messagesElement.value = result.join('\n');
            })
            .catch(error => console.log(error))
    }
}

attachEvents();