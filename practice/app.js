const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
	const userName = loginInput.value;

	if (userName === "") {
		alert("Please write your name");
	} else if (userName.length > 15) {
		alert("Too Long name");
	}
}

loginButton.addEventListener("click", onLoginBtnClick);
