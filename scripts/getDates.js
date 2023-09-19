function populateYear() {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  const copyrightSymbol = "&copy;";

  let content = `${copyrightSymbol} ${fullYear}`;

  let popYear = document.getElementById("year");

  popYear.innerHTML = content;
}

populateYear();

function lastModified() {
  const modificationReport = "Last Modification: 9/19/2023 9:30:00";

  let popLastModified = document.getElementById("lastModified");

  popLastModified.innerHTML = modificationReport;
}

lastModified();
