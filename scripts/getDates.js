function populateYear() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  const copyrightSymbol = "&copy;";

  let content = `${copyrightSymbol} ${fullYear}`;

  let popYear = document.getElementById("year");

  popYear.innerHTML = content;
}

populateYear();

let lastModified = document.lastModified

let lastModifiedElement = document.querySelector('#lastModified');

if (lastModified) {
  lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
}
