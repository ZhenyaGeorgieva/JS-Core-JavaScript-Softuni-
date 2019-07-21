function solve() {
    let loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', loadBooks);

    let submitBtn = document.getElementsByTagName('form')[0].getElementsByTagName('button')[0];
    submitBtn.addEventListener('click', ev => {
        ev.preventDefault();
        addElement();
    });
    let doneBtn = document.getElementsByTagName('form')[0].getElementsByTagName('button')[1];
    let cancelBtn = document.getElementsByTagName('form')[0].getElementsByTagName('button')[2];

    let booksSection = document.getElementsByTagName('tbody')[0];
    booksSection.innerHTML = '';

    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let isbnInput = document.getElementById('isbn');

    const basicUrl = 'https://baas.kinvey.com/appdata/kid_SJRDUj2-H/books';
    const username = 'guest';
    const password = 'guest';
    const base_64 = btoa(username + ':' + password);
    const auth = {
        'Authorization': 'Basic ' + base_64,
        'Content-type': 'application/json'
    };

    function loadBooks() {

        fetch(basicUrl, {
            method: 'GET',
            url: basicUrl,
            headers: auth
        })
            .then(validate)
            .then((response) => response.json())
            .then((data) => showBooks(data))
    }

    function showBooks(data) {
        booksSection.innerHTML = '';
        for (let obj of data) {
            let trElement = document.createElement('tr');
            trElement.setAttribute('data-id', `${obj._id}`)

            let tdTitle = document.createElement('td');
            tdTitle.textContent = `${obj.title}`;
            trElement.appendChild(tdTitle);

            let tdAuthor = document.createElement('td');
            tdAuthor.textContent = `${obj.author}`;
            trElement.appendChild(tdAuthor);

            let tdIsbn = document.createElement('td');
            tdIsbn.textContent = `${obj.isbn}`;
            trElement.appendChild(tdIsbn);

            let tdButtons = document.createElement('td');

            let updateBtn = document.createElement('button');
            updateBtn.textContent = 'Edit';
            updateBtn.addEventListener('click', fillEditForm);
            tdButtons.appendChild(updateBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteElement);
            tdButtons.appendChild(deleteBtn);

            trElement.appendChild(tdButtons);
            booksSection.appendChild(trElement);
        }
    }

    function deleteElement(event) {
        let elementToDelete = event.currentTarget.parentNode.parentNode;

        let elementToDeleteId = elementToDelete.getAttribute('data-id')

        let urlDelete = basicUrl + '/' + elementToDeleteId;
        fetch(urlDelete, {
            method: 'DELETE',
            url: urlDelete,
            headers: auth,
            body: ''
        })
            .then(validate)
            .then((data) => {
                loadBtn.click();
            })
    }

    function fillEditForm(event) {
        let elementToEdit = event.currentTarget.parentNode.parentNode;

        let elementToEditId = elementToEdit.getAttribute('data-id');
        let titleToEdit = elementToEdit.children[0].textContent;
        let authorToEdit = elementToEdit.children[1].textContent;
        let isbnToEdit = elementToEdit.children[2].textContent;

        titleInput.value = titleToEdit;
        authorInput.value = authorToEdit;
        isbnInput.value = isbnToEdit;

        let formTitle = document.getElementsByTagName('h3')[0];
        formTitle.textContent = 'EDIT BOOK'

        submitBtn.style.display = 'none';
        doneBtn.style.display = 'block';
        cancelBtn.style.display = 'block';

        doneBtn.addEventListener('click', ev => {
            ev.preventDefault();
            editBook(elementToEditId);
        });;
        cancelBtn.addEventListener('click', ev => {
            ev.preventDefault();
            cancelEditBook();
        });
    }

    function editBook(elementToEditId) {
        if (titleInput.value && authorInput.value && isbnInput.value) {
            booksSection.innerHTML = '';
            let editedBook = {};
            editedBook.title = titleInput.value;
            editedBook.author = authorInput.value;
            editedBook.isbn = isbnInput.value;

            let urlEdit = basicUrl + '/' + elementToEditId;
            fetch(urlEdit, {
                method: 'PUT',
                url: urlEdit,
                headers: auth,
                body: JSON.stringify(editedBook)
            })
                .then(validate)
                .then((data) => {
                    loadBtn.click();
                })
        }
        clearForm();

        let formTitle = document.getElementsByTagName('h3')[0];
        formTitle.textContent = 'FORM'

        submitBtn.style.display = 'block';
        doneBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
    }

    function cancelEditBook() {
        clearForm();

        let formTitle = document.getElementsByTagName('h3')[0];
        formTitle.textContent = 'FORM'

        submitBtn.style.display = 'block';
        doneBtn.style.display = 'none';
        cancelBtn.style.display = 'none';

    }

    function addElement() {
        if (titleInput.value && authorInput.value && isbnInput.value) {
            let newBook = {};
            newBook.title = titleInput.value;
            newBook.author = authorInput.value;
            newBook.isbn = isbnInput.value;

            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';

            fetch(basicUrl, {
                method: "POST",
                headers: auth,
                body: JSON.stringify(newBook)
            })
                .then(validate)
                .then((data) => {
                    loadBtn.click();
                })
        }

    }

    function clearForm() {
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }

    function validate(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response;
    }
}
solve();
