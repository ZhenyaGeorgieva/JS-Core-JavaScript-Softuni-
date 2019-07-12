function attachEvents() {

    document.getElementById('btnLoad').addEventListener('click', loadContacts);
    document.getElementById('btnCreate').addEventListener('click', createContact);

    function loadContacts() {
        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        fetch(url)
            .then((request) => request.json())
            .then((data) => displayContacts(data))
            .catch(error => handleError(error));
    }


    function displayContacts(data) {
        document.getElementById('phonebook').innerHTML = '';
        let values = Object.entries(data);

        for (let [id, value] of values) {
            let name = value.person;
            let phoneNum = value.phone;
            let delBtn = document.createElement('button');
            delBtn.textContent = 'DELETE';
            let listItem = document.createElement('li');
            listItem.setAttribute('id', id);
            listItem.textContent = `${name}: ${phoneNum}`

            delBtn.addEventListener('click', () => {
                let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`
                fetch(deleteUrl, {
                    method: 'delete'
                })
                    .then(loadContacts)
                    .catch(error => handleError(error));
            });

            listItem.appendChild(delBtn);

            document.getElementById('phonebook').appendChild(listItem);
        }
    }

    function handleError(error) {
        console.log(error);
    }


    function createContact() {
        let person = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;

        let obj = {};
        obj.person = person;
        obj.phone = phone;

        let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        fetch(url, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(loadContacts)
            .catch(error => handleError(error));

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
    }
}

attachEvents();