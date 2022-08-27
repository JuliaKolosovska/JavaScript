let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then((data) => {
        let wrapes = document.getElementsByClassName('wrap');
        let wrap = wrapes[0];
        let userInfo = document.createElement('div');
        userInfo.classList.add('info')
        let name = document.createElement('h3');
        name.innerText = `${data.id}.  ${data.name}`;
        let userName = document.createElement('h4');
        userName.innerText = `Username: ${data.username}`;
        let email = document.createElement('p');
        email.innerText = `email: ${data.email}`;
        let adress = document.createElement('p');
        adress.innerText = `adress: ${data.address.street} ${data.address.suite}, ${data.address.zipcode} ${data.address.city} , geo: lat ${data.address.geo.lat}, lng ${data.address.geo.lng}`;
        let phone = document.createElement('p');
        phone.innerText = `phone: ${data.phone}`;
        let website = document.createElement('p');
        website.innerText = `website: ${data.website}`;
        let company = document.createElement('p');
        company.innerText = `company: ${data.company.name}, catch phrase: ${data.company.catchPhrase}, bs: ${data.company.bs}`;


        userInfo.append(name, userName, email, adress, phone, website, company);
        let detailsBtn = document.createElement('button');
        detailsBtn.classList.add('posts');
        detailsBtn.innerText = 'Posts of current user';
        detailsBtn.onclick = titles;

        function titles() {

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => posts.forEach(post => {
                    try {
                        let btnHide = detailsBtn.style.visibility = 'hidden';
                        wrap.appendChild(btnHide);
                    } catch (e) {
                    }
                    let postsDiv = document.getElementsByClassName('wrap2');
                    let postDiv = postsDiv[0];
                    // let postsDiv = document.createElement('div');
                    //     postsDiv.classList.add('list');
                    let postTitle = document.createElement('div');
                    postTitle.classList.add('post');
                    postTitle.innerHTML = `<p>${post.title}</p>`;
                    postDiv.appendChild(postTitle);
                    wrap.appendChild(postDiv);
                    let postDetails = document.createElement('button');
                    postDetails.classList.add('details');
                    postDetails.innerText = 'Post details';
                    postDetails.onclick = details;

                    function details() {
                        document.location.href = `post-details.html?id=${post.id}`;

                    }

                    postTitle.appendChild(postDetails);
                }))
        }


        wrap.appendChild(userInfo);
        wrap.appendChild(detailsBtn);
    })

