const hello = document.createElement("h2");
hello.innerText = "Hello!";
hello.style.color = "white";
document.body.appendChild(hello);

const convertWidthToBackgroundColor = function (width) {
	const colors = ["#EEBC12", "#914ead", "#2D8Ed6"];
	let backgroundColor = colors[1];
	
	if (width > 900) {
		backgroundColor = colors[0];
	} else if (width > 600) {
		backgroundColor = colors[1];
	} else {
		backgroundColor = colors[2];
	}

	document.body.style.backgroundColor = backgroundColor;
};

convertWidthToBackgroundColor(window.innerWidth);

function windowResize() {
	const width = window.innerWidth;
	convertWidthToBackgroundColor(width);
}

window.addEventListener("resize", windowResize);
