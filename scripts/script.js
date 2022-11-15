const debugButton = document.querySelector("#debug-button");
const addButton = document.querySelector("#add-button");
const input = document.querySelector("input");
const taskList = document.querySelector("ul");

let debugMode = false;

// <====== FUNCTIONS ======>

// <--- Create a new list item with buttons --->
function createListItem(task) {
	// <- Create the list item ->
	const listItem = document.createElement("li");
	const listText = document.createElement("p");
	listItem.id = "task-" + taskList.childElementCount;
	listText.innerText = task;
	listItem.append(listText);

	// <- Declare buttons ->
	const buttons = [
		{ id: "delete", text: "Delete", func: deleteTask },
		{ id: "complete", text: "Complete", func: completeTask },
		{ id: "urgent", text: "Urgent", func: urgentTask },
		{ id: "edit", text: "Edit", func: editTask },
		//{ id: "cancel", text: "Cancel", func: cancelTask },
		//{ id: "save", text: "Save", func: saveTask },
	];

	// <- Add buttons to the new task ->
	buttons.forEach((button) => {
		const buttonElement = buttonFactory(button);
		listItem.append(buttonElement);
		//if (button.id === "cancel" || "save") {
		//	buttonElement.classList.toggle("hidden");
		//}
	});

	// <- Return the new task ->
	return listItem;
}

// <--- Add a task to the corresponding listItem --->
function addTask(task) {
	task = input.value;
	const listItem = createListItem(task);
	taskList.append(listItem);
	input.value = "";
}

// <--- Delete the task --->
const deleteTask = (task) => {
	task.remove();
};

// <--- Mark the task as completed --->
function completeTask(task) {
	task.classList.toggle("completed");

	// <- Move the task to the bottom of the list ->
	taskList.append(task);
}

// <--- Mark the task as urgent --->
function urgentTask(task) {
	task.classList.toggle("urgent");

	// <- Move the task to the top of the list ->
	taskList.prepend(task);
}

// <--- Edit the task --->
function editTask(task) {
	const text = task.querySelector("p");
	const savedText = text.innerText;

	// <- Show the save and cancel buttons ->
	// saveButton.classList.toggle("hidden");
	// cancelButton.classList.toggle("hidden");

	// <- Convert the task to an input field and focus on it ->
	const input = document.createElement("input");
	input.value = text.innerText;
	task.replaceChild(input, text);
	input.focus();
}

// <===== HELPER FUNCTIONS =====>

// function saveTask(task) {
// 	// <- Convert the input field back to a task ->
// 	const text = document.createElement("p");
// 	text.innerText = input.value;
// 	task.replaceChild(text, input);
// }

// function cancelTask(task) {
// 	// <- Convert the input field back to a task ->
// 	const text = document.createElement("p");
// 	text.innerText = savedText;
// 	task.replaceChild(text, input);
// }

// <===== EVENT LISTENERS ======>

// <--- Add button listener --->
addButton.addEventListener("click", (e) => {
	e.preventDefault();

	// <- Check if the input field is empty, focus if it is ->
	input.value === "" ? input.focus() : addTask();
});

// <--- Debug mode listener --->
debugButton.addEventListener("click", (e) => {
	runTests();

	// <- Toggle debug mode ->
	debugMode = !debugMode;

	// <- Toggle debug button text ->
	debugButton.innerText = debugMode ? "Debug Mode: On" : "Debug Mode: Off";

	// <- If debug mode is false, clear the list and input ->
	if (!debugMode) {
		taskList.innerHTML = "";
		input.value = "";
	}
});

// <====== FACTORIES! ======>

// <--- Factory for buttons --->
function buttonFactory({ id, text, func }) {
	const button = document.createElement("button");

	// <- Assign id and text to the button ->
	[button.id, button.innerText] = [id, text];

	// <- Execute function on the button's parent element ->
	button.addEventListener("click", (e) => func(e.target.parentElement));
	return button;
}

// <--- don't know about this one --->
// function taskFactory()) {
//   const task = input.value;
// 	 if (!task) return;
// 	 const listItem = document.createElement("li");
// 	 const listText = document.createElement("p");
// 	 listText.innerText = task;
// 	 listItem.append(listText);
//   taskList.append(listItem);
//   input.value = "";
//   return task;
// }
