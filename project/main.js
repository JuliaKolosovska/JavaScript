fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {
        let wrapes = document.getElementsByClassName('wrap');
        let wrap = wrapes[0];
        let block = document.createElement('div');
        block.innerText = user.id + '. ' + user.name;
        block.classList.add('block');
        let detailsBtn = document.createElement('button');
        detailsBtn.classList.add('details');
        detailsBtn.innerText = 'Details';
        detailsBtn.onclick = hrefForBtn;

        function hrefForBtn() {
            document.location.href = `user-details.html?id=${user.id}`;

        }

        block.appendChild(detailsBtn);

        wrap.appendChild(block);
    }))


