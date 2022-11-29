const randomGameForm = document.querySelector("#randomGameForm");
const randomMax = document.querySelector("#randomMax");
const guessNumber = document.querySelector("#guessNumber");
const gameMessage = document.querySelector("#gameMessage");
const lost = document.querySelector("#lost");
const won = document.querySelector("#won");

const HIDDEN_CLASSNAME = "hidden";

const gamePlay = function (event) {
	event.preventDefault();

	const max = randomMax.valueAsNumber;
	const guess = guessNumber.valueAsNumber;

	const machineNumber = Math.floor(Math.random() * (max + 1));
	gameMessage.innerText = `You chose: ${guess}, the machine chose: ${machineNumber}`;
	gameMessage.classList.remove(HIDDEN_CLASSNAME);

	if (machineNumber === guess) {
		won.classList.remove(HIDDEN_CLASSNAME);
		lost.classList.add(HIDDEN_CLASSNAME);
	} else {
		won.classList.add(HIDDEN_CLASSNAME);
		lost.classList.remove(HIDDEN_CLASSNAME);
	}
};

randomGameForm.addEventListener("submit", gamePlay);
