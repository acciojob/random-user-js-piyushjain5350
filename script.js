const getUserBtn = document.getElementById('getUser');
getUserBtn.addEventListener('click', getUser);

const ageBtn = document.querySelector('button[data-attr="age"]');
ageBtn.addEventListener('click', showAge);

const emailBtn = document.querySelector('button[data-attr="email"]');
emailBtn.addEventListener('click', showEmail);

const phoneBtn = document.querySelector('button[data-attr="phone"]');
phoneBtn.addEventListener('click', showPhone);

let user;

function getUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      user = data.results[0];
      showUser(user);
    });
}

function showUser(user) {
    const photo = document.getElementById('photo');
    const name = document.getElementById('name');
    const info = document.getElementById('infoText');

    photo.src = user.picture.large;
    name.textContent = `${user.name.first} ${user.name.last}`;
    info.textContent = '';

    const infoDiv = document.querySelector('.info');
    infoDiv.style.display = 'none';
  }

  function showAge() {
    const info = document.getElementById('infoText');
    info.textContent = `Age: ${user.dob.age}`;

    const infoDiv = document.querySelector('.info');
    infoDiv.style.display = 'block';
  }

  function showEmail() {
    const info = document.getElementById('infoText');
    info.textContent = `Email: ${user.email}`;

    const infoDiv = document.querySelector('.info');
    infoDiv.style.display = 'block';
  }

  function showPhone() {
    const info = document.getElementById('infoText');
    info.textContent = `Phone: ${user.phone}`;

    const infoDiv = document.querySelector('.info');
    infoDiv.style.display = 'block';
  }

  getUser();