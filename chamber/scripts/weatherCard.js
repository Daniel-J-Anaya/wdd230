const currentTemp = document.querySelector('#currentTemp');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.94&lon=-118.13&units=imperial&appid=f6f27be4440755432a9ca4fef98935e0';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
}
