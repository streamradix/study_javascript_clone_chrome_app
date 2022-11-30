const quotes = [
	{
		quote: "A",
		author: "ME01",
	},
	{
		quote: "B",
		author: "ME02",
	},
	{
		quote: "C",
		author: "ME03",
	},
	{
		quote: "D",
		author: "ME04",
	},
	{
		quote: "E",
		author: "ME05",
	},
	{
		quote: "F",
		author: "ME06",
	},
	{
		quote: "G",
		author: "ME07",
	},
	{
		quote: "H",
		author: "ME08",
	},
	{
		quote: "후회하기 싫다 후회할 짓을 하지 말자",
		author: "ME09",
	},
	{
		quote: "내탓이 아닐 수 도 있지만 남탓해봐야 나아지는건 없다",
		author: "ME10",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;



// Math.random() // 0 이상 1미만 랜덤

// Math.round(실수) - 반올림
// Math.ceil(실수) - 올림
// Math.floor(실수) - 내림
