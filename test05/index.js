const colors = [
	"#ef5777",
	"#575fcf",
	"#4bcffa",
	"#34e7e4",
	"#0be881",
	"#f53b57",
	"#3c40c6",
	"#0fbcf9",
	"#00d8d6",
	"#05c46b",
	"#ffc048",
	"#ffdd59",
	"#ff5e57",
	"#d2dae2",
	"#485460",
	"#ffa801",
	"#ffd32a",
	"#ff3f34",
];

function getColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomInteger(integer) {
	return Math.floor(Math.random() * integer);
}

const changeBackground = function () {
	const firstColor = getColor();
	let secondColor = getColor();

	while (firstColor === secondColor) {
		secondColor = getColor();
	}

	const degree = getRandomInteger(360);

	document.body.style.background = `linear-gradient(${degree}deg, ${firstColor}, ${secondColor})`;
};

changeBackground();

const button = document.querySelector("button");
button.addEventListener("click", changeBackground);

setInterval(changeBackground, 1000);
