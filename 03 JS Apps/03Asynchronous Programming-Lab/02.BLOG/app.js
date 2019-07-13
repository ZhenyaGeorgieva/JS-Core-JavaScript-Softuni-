function attachEvents() {
    let loadBtn = document.getElementById('btnLoadPosts');
    let postsElement = document.getElementById('posts');
    let showBtn = document.getElementById('btnViewPost');

    loadBtn.addEventListener('click', () => {
        let url = 'https://blog-apps-c12bf.firebaseio.com/posts.json'
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                document.getElementById('posts').innerHTML = '';
                for (let [key, tokens] of Object.entries(data)) {
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = tokens.title;
                    postsElement.appendChild(option);
                }
            })
    });

    showBtn.addEventListener('click', () => {
        let selectedTitleId = postsElement.value;
        let url = `https://blog-apps-c12bf.firebaseio.com/posts/${selectedTitleId}.json`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                document.getElementById('post-body').textContent = data.body;

                let postId = data.id;
                console.log(postId);

                let urlComments = 'https://blog-apps-c12bf.firebaseio.com/comments.json';

                fetch(urlComments)
                    .then((response) => response.json())
                    .then((data) => {
                        document.getElementById('post-comments').innerHTML = '';
                        for (let tokens of Object.values(data)) {
                            if (tokens.postId === postId) {
                                console.log(tokens.text)
                                console.log(tokens.id)

                                let listOfComments = document.getElementById('post-comments');
                                let liComment = document.createElement('li');
                                liComment.textContent = tokens.text;
                                liComment.id = tokens.id;

                                listOfComments.appendChild(liComment);

                            }
                        }
                    })
            })
    })
}

attachEvents();