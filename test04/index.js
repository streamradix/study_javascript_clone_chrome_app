const clockTitle = document.querySelector(".js-clock");
const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeakYear = function (year) {
	if (year % 400 === 0) return true;
	if (year % 100 === 0) return false;
	if (year % 4 === 0) return true;
	return false;
};

const getDaysOfYear = function (dateObject) {
	const month = dateObject.getMonth();
	const date = dateObject.getDate();

	if (month === 0) return date; // January

	let result = date;

	// Leak year && after February
	if (isLeakYear(dateObject.getFullYear()) && month > 1) result += 1;

	for (let index = 0; index < month; index++) {
		result += daysOfMonth[index];
	}

	return result;
};

const getNextXMas = function (dateObject) {
	let nextXMas = dateObject.getFullYear();

	if (dateObject.getMonth() === 11 && dateObject.getDate() >= 25) {
		nextXMas += 1;
	}

	return new Date(nextXMas, 11, 25, 0, 0, 0);
};

const showRemainToXMas = function () {
	const now = new Date();
	const thisYear = now.getFullYear();

	const nextXMas = getNextXMas(now);

	let ramainDays = getDaysOfYear(nextXMas) - getDaysOfYear(now);
	let remainHours = nextXMas.getHours() - now.getHours();
	let remainMinutes = nextXMas.getMinutes() - now.getMinutes();
	let remainSeconds = nextXMas.getSeconds() - now.getSeconds();

	if (remainSeconds < 0) {
		remainMinutes -= 1;
		remainSeconds += 60;
	}

	if (remainMinutes < 0) {
		remainHours -= 1;
		remainMinutes += 60;
	}

	if (remainHours < 0) {
		ramainDays -= 1;
		remainHours += 24;
	}

	if (thisYear !== nextXMas.getFullYear()) {
		ramainDays += isLeakYear(thisYear) ? 366 : 365;
	}

	const hours = String(remainHours).padStart(2, "0");
	const minutes = String(remainMinutes).padStart(2, "0");
	const seconds = String(remainSeconds).padStart(2, "0");

	clockTitle.innerText = `${ramainDays}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(showRemainToXMas, 1000);
showRemainToXMas();
