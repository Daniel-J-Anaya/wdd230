function populateYear() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  const copyrightSymbol = "&copy;";

  let content = `${copyrightSymbol} ${fullYear}`;

  let popYear = document.getElementById("year");

  popYear.innerHTML = content;
}
