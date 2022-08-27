let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then((data => {

        let postInfos = document.getElementsByClassName('info');
        let postInfo = postInfos[0];
        postInfo.innerHTML = '<h3>Post info:</h3>';
        let userId = document.createElement('p');
        userId.innerText = `User ID: ${data.userId}`;
        let idPost = document.createElement('p');
        idPost.innerText = `ID: ${data.id}`;
        let title = document.createElement('p');
        title.innerText = `Title: ${data.title}`;
        let body = document.createElement('p');
        body.innerText = `Body: ${data.body}`;

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(comments => comments.forEach(comment => {
                let comsDiv = document.getElementsByClassName('wrap2');
                let comDiv = comsDiv[0];
                let com = document.createElement('div');
                com.classList.add('com');
                let name = document.createElement('p');
                name.innerText = `name:${comment.name}`;
                let email = document.createElement('p');
                email.innerText = `email: ${comment.email}`;
                let body = document.createElement('p');
                body.innerText = `comment: ${comment.body}`;
                com.append(name, email, body);
                comDiv.appendChild(com);

            }))


        postInfo.append(userId, idPost, title, body);


    }))


