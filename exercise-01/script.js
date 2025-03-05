const profileName = document.querySelector("h1");
const profileDesc = document.querySelector("p");

profileName.innerText = "John Doe";
profileDesc.innerText = "Dynamic description";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (button.innerText === "Follow") {
    button.innerText = "Following";
  } else {
    button.innerText = "Follow";
  }
});

const themeBtn = document.getElementById("toggle-theme");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

async function loadAPI() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  const [first, ...others] = data.results;
  setMainCard(first);
  setOthers(others);
}

loadAPI();

function setMainCard(user) {
  const card = new Card(user);
  profileName.innerText = card.name;
  profileDesc.innerText = card.description;
  document.querySelector("img").src = user.picture.medium;
}

function setOthers(users) {
  const cards = users
    .map((user) => new Card(user))
    .map((card) => `${card.name} ${card.phone}`)
    .join("\n");
  document.getElementById("friends").innerText = cards;
}

class Card {
  constructor({ name, email, cell }) {
    this.name = `${name.first} ${name.last}`;
    this.description = email;
    this.phone = cell;
  }
}
