function solve() {
    let idInput = document.getElementById('id');
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput = document.getElementById('lastName');
    let facultyNumberInput = document.getElementById('facultyNumber');
    let gradeInput = document.getElementById('grade');

    const basicUrl = 'https://baas.kinvey.com/appdata/kid_SJRDUj2-H/students';
    const userName = 'guest';
    const password = 'guest';
    const base_64 = btoa(userName + ':' + password);
    const auth = {
        'Authorization': 'Basic ' + base_64,
        'Content-type': 'application/json'
    };

    getStudents();

    function getStudents() {
        fetch(basicUrl, {
            method: 'GET',
            headers: auth
        })
            .then(validate)
            .then((response) => response.json())
            .then((data) => {
                showStudents(data);
            });
    }

    function showStudents(data) {
        let studentSection = document.getElementsByTagName('tbody')[0];

        if (Array.from(data).length > 0) {
            studentSection.innerHTML = '';
            let sortedData = Object.values(Array.from(data)).sort((a, b) => a.ID - b.ID);
            console.log(sortedData);
            for (let tokens of sortedData) {
                let newStudentElement = document.createElement('tr');
                newStudentElement.innerHTML = `
                <td>${tokens.ID}</td>
                <td>${tokens.FirstName}</td>
                <td>${tokens.LastName}</td>
                <td>${tokens.FacultyNumber}</td>
                <td>${tokens.Grade}</td>`;
                studentSection.appendChild(newStudentElement);
            }
        }
    }

    let addBtn = document.getElementsByTagName('button')[0];
    addBtn.addEventListener('click', ev => {
        ev.preventDefault();
        addStudent();
    });

    function addStudent() {
        console.log('in add student')
        if ((Number(idInput.value) > 0)
            && firstNameInput.value
            && lastNameInput.value
            && Number(facultyNumberInput.value)
            && !isNaN(gradeInput.value)) {
            console.log('in create student')
            let newStudent = {};
            newStudent.ID = Number(idInput.value);
            newStudent.FirstName = firstNameInput.value;
            newStudent.LastName = lastNameInput.value;
            newStudent.FacultyNumber = facultyNumberInput.value;
            newStudent.Grade = Number(gradeInput.value);

            fetch(basicUrl, {
                method: 'POST',
                headers: auth,
                body: JSON.stringify(newStudent)
            })
                .then(validate)
                .then((data) => getStudents())

        }
        idInput.value = '';
        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }

    function validate(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response;
    }
}
solve();