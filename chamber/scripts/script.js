// hidden
const currentTimestamp = Date.now();

document.querySelector('#myHiddenField').value = currentTimestamp;

// original
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const heroText = document.querySelector(".hero-text");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		cards.forEach(card => {
			card.style.background = "#000";
			card.style.color = "#fff";
		});

		// heroText.style.background = "#000";

		header.style.background = "#000";
		header.style.color = "#fff";

		// main.style.background = "gray";
		// main.style.color = "#fff";

		footer.style.background = "#000";
		footer.style.color = "#fff";

		modeButton.textContent = "🔆";
	} else {
		cards.forEach(card => {
			card.style.background = "gray";
			card.style.color = "#000";
		});

		// heroText.style.background = "rgba(45, 45, 45, 0.9)";

		header.style.background = "#1D3557";
		header.style.color = "#000";

		// main.style.background = "#eee";
		// main.style.color = "footer";

		footer.style.background = "#1D3557";
		footer.style.color = "#fff";

		modeButton.textContent = "🕶️";
	}
});

const dateNow = new Date.now();
console.log(dateNow);

