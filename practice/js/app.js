const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

//const link = document.querySelector("a");

function onLoginBtnClick(event) {
	event.preventDefault(); // 이벤트 기본동작 막기
	console.dir(loginInput);

	//const username = loginInput.value;
	//console.log(username);
}

function handleLinkClick(event) {
	console.dir(event);
	event.preventDefault();
}

//loginButton.addEventListener("click", onLoginBtnClick);
//loginForm.addEventListener("submit", onLoginBtnClick);
//link.addEventListener("click", handleLinkClick);

function onLoginSubmit(event) {
	event.preventDefault();
	const userName = loginInput.value;
	localStorage.setItem(KEY_USERNAME, userName);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${userName}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(KEY_USERNAME);

if (savedUserName === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${userName}`;
}
