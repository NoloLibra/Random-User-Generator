document.getElementById('fetchUserbtn').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = `
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <img src="${user.picture.large}" alt="User Image"></img>
        `;
    })
    .catch(error => console.error('Error fetching user:', error));
}