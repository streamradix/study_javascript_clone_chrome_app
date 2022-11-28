const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(event) {
	event.preventDefault(); // 이벤트 기본동작 막기
	console.log(event);
	//const username = loginInput.value;
	//console.log(username);
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginBtnClick);
