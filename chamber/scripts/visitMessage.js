let currentDate = new Date();
const visitorMessage = document.querySelector('.visitorMessage');
let lastVisit = new Date(window.localStorage.getItem("current-date"));
let diffTime = currentDate.getTime() - lastVisit.getTime();
let diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits == 0) {
    visitorMessage.textContent = `Welcome! Let us know if you have any questions.`;
} else if (diffDays < 1) {
    visitorMessage.textContent = `Back So Soon! Awesome!`;
} else if (diffDays = 1){
    visitorMessage.textContent = `You last visited ${diffDays} day ago`
} else {
    visitorMessage.textContent = `You last visited ${diffDays} days ago.`
}

localStorage.setItem("current-date", currentDate);

localStorage.setItem("numVisits-ls", numVisits);

numVisits++;

console.log(diffTime);
console.log(diffDays);
