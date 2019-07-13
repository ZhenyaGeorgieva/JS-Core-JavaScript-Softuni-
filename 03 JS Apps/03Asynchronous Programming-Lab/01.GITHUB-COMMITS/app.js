function loadCommits() {
    let userName = document.getElementById('username').value;
    let repoName = document.getElementById('repo').value;
    let url = `https://api.github.com/repos/${userName}/${repoName}/commits`

    let commitsList = document.getElementById('commits');
    commitsList.innerHTML = '';

    let myPromise = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status > 300) {
                    console.log(response.statusText)
                    throw new Error(`${response.status} (${response.statusText})`);
                }
            })
            .then((data) => resolve(data.json()))
            .catch((error) => {
                console.log(error)
                reject(error)
            })
    })

    myPromise
        .then(function (data) {
            let arr = Object.values(data);
            for (let index = 0; index < arr.length; index++) {
                let info = arr[index];
                console.log(info.commit);
                let text = `${info.commit.author.name}: ${info.commit.message}`;
                let li = document.createElement('li');
                li.textContent = text;
                commitsList.appendChild(li);
            }
        })
        .catch(function (error) {
            console.log(error)
            let li = document.createElement('li');
                li.textContent = error;
                commitsList.appendChild(li);
        })

    // document.getElementById('username').value = '';
    // document.getElementById('repo').value = '';
}