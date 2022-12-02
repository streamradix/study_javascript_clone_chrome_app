const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const toDoKey = "todos";

const saveToDos = () => localStorage.setItem(toDoKey, JSON.stringify(toDos));

const restoreToDos = () => {
	let saveToDos = JSON.parse(localStorage.getItem(toDoKey));
	if (saveToDos === null) saveToDos = [];
	return saveToDos;
};

const showTodo = (newToDoObject) => {
	const li = document.createElement("li");
	li.id = newToDoObject.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	span.innerText = newToDoObject.text;
	button.innerText = "X";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
	event.preventDefault();

	const newToDo = toDoInput.value;
	toDoInput.value = "";

	const newToDoObject = {
		text: newToDo,
		id: Date.now(),
	};

	toDos.push(newToDoObject);
	showTodo(newToDoObject);
	saveToDos();
}

let toDos = restoreToDos();

const deleteTodo = (event) => {
	const li = event.target.parentElement;
	const id = li.id;
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
	saveToDos();
	li.remove();
};

toDos.forEach((item) => showTodo(item));

toDoForm.addEventListener("submit", handleToDoSubmit);
