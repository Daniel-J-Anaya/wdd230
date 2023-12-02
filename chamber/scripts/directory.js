const gridButton = document.querySelector('#gridButton');
const listButton = document.querySelector('#listButton');
const display = document.querySelector('.directory')

const cardData = `data/members.json`;
const cards = document.querySelector('.directory')

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("gridToggle");
	display.classList.remove("listToggle");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("listToggle");
	display.classList.remove("gridToggle");
}

async function getCardData() {
  const response = await fetch(cardData);
  const data = await response.json();
  // console.table(data.members);
  displayCard(data.members);
}

const displayCard = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let url = document.createElement('a');

    address.textContent = `${member.address}`;
    number.textContent = `${member.number}`;
    name.textContent = `${member.name}`;
    url.textContent = `${member.url}`;

    url.setAttribute('href', member.url);

    name.setAttribute('class', 'bname');

    logo.setAttribute('src', member.img);
    logo.setAttribute('alt', `${member.name} logo`)
    logo.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(url);
    card.setAttribute('class', 'bcard')

    cards.appendChild(card);
  });
}

getCardData();
