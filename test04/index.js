const clockTitle = document.querySelector(".js-clock");
const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeakYear = function (year) {
	if (year % 400 === 0) return true;
	if (year % 100 === 0) return false;
	if (year % 4 === 0) return true;
	return false;
};

const getDaysOfYear = function (dateObject) {
	const year = dateObject.getFullYear();
	const month = dateObject.getMonth();
	const date = dateObject.getDate();

	if (month === 0) return date;

	let result = date;
	for (let index = 0; index < month; index++) {
		result += daysOfMonth[index];
	}

	if (isLeakYear(year)) result += 1;

	return result;
};

const getNextChristmas = function (dateObject) {
	let nextChristmasYear = dateObject.getFullYear();
	
	if (dateObject.getMonth() === 11 && dateObject.getDate() >= 25) {
		nextChristmasYear += 1;
	}

	return new Date(nextChristmasYear, 11, 25);
};

const getRemainTime = function (time, numberSystem) {
	const remain = numberSystem - time;
	if (remain === numberSystem) return 0;
	return remain;
};

const remainTimesToChristmas = function () {
	const now = new Date();
	const nextChristmas = getNextChristmas(now);
	
	const year = now.getFullYear();
	const hours = String(getRemainTime(now.getHours(), 24) - 1).padStart(2, "0");
	const minutes = String(getRemainTime(now.getMinutes(), 60) - 1).padStart(2, "0");
	const seconds = String(getRemainTime(now.getSeconds(), 60)).padStart(2, "0");

	let ramainDays = getDaysOfYear(nextChristmas) - getDaysOfYear(now) - 1;

	if (nextChristmas.getFullYear() != year) {
		ramainDays += isLeakYear(year) ? 366 : 365;
	}

	clockTitle.innerText = `${ramainDays}d ${hours}h ${minutes}m ${seconds}s`;
};

setInterval(remainTimesToChristmas, 1000);
remainTimesToChristmas();
