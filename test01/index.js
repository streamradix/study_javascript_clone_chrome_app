const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
	mouseEnter: function () {
		title.innerText = "The mouse is here!";
		title.style.color = colors[0];
	},
	mouseLeave: function () {
		title.innerText = "The mouse is gone!";
		title.style.color = colors[1];
	},
	windowResize: function () {
		title.innerText = "You just resized!";
		title.style.color = colors[2];
	},
	rightClick: function () {
		title.innerText = "That was a right click!";
		title.style.color = colors[4];
	},
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
