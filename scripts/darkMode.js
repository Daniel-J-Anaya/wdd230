const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const name = document.querySelector("#name");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
    header.style.background = "#000";
    name.style.color = "#fff";
    body.style.background = "#000";
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "Light Mode";
    modeButton.style.background = "var(--background-color)";
    modeButton.style.color = "var(--secondary-color)";
	} else {
    header.style.background = "#fff";
    name.style.color = "#000"
    body.style.background = "#fff";
		main.style.background = "#fff";
		main.style.color = "var(--font-color)";
		modeButton.textContent = "Dark Mode";
    modeButton.style.background = "var(--primary-color)";
    modeButton.style.color = "var(--font-color)";
	}
});
