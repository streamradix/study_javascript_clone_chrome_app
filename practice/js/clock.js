const clock = document.querySelector("h2#clock");

function sayHello(params) {
	console.log("hello");
}

//setInterval(sayHello, 5000);
//setTimeout(sayHello, 5000);

const date = new Date();
date.getDate();
date.getHours();
date.getMinutes();

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getClock, 1000);

console.log("1".padStart(2, "0"));
