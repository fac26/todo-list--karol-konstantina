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
		{ classList: "delete-button", text: "Delete", func: deleteTask },
		{ classList: "complete-button", text: "Complete", func: completeTask },
		{ classList: "urgent-button", text: "Urgent", func: urgentTask },
		{ classList: "edit-button", text: "Edit", func: editTask },
	];

	// <- Add buttons to the new task ->
	buttons.forEach((button) => {
		const buttonElement = buttonFactory(button);
		listItem.append(buttonElement);
		//? if (button.id === "cancel" || "save") { buttonElement.classList.toggle("hidden"); }
	});

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
const completeTask = (task) => {
	task.classList.toggle("completed");
	taskList.append(task);
};

// <--- Mark the task as urgent --->
const urgentTask = (task) => {
	task.classList.toggle("urgent");
	taskList.prepend(task);
};

// <--- Edit the task ---> //!not dry
function editTask(task) {
	const text = task.querySelector("p");
	const savedText = text.innerText;

	// <- Hide all buttons in the task -> //* Later removes the class in event listeners
	const buttons = task.querySelectorAll("button");
	buttons.forEach((button) => {
		button.classList.add("hidden");
	});

	//? <- Show the save and cancel buttons ->
	//? saveButton.classList.toggle("hidden");
	//? cancelButton.classList.toggle("hidden");

	// <- Convert the task to an input field and focus on it ->
	const input = document.createElement("input");
	input.value = text.innerText;
	task.replaceChild(input, text);
	input.focus();

	// <- On blur, save the new text ->
	input.addEventListener("blur", () => {
		const text = document.createElement("p");
		text.innerText = input.value;
		task.replaceChild(text, input);
		buttons.forEach((button) => {
			button.classList.remove("hidden");
		});
	});

	// <- On "Enter", save the new text ->
	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			const text = document.createElement("p");
			text.innerText = input.value;
			task.replaceChild(text, input);
			buttons.forEach((button) => {
				button.classList.remove("hidden");
			});
		}
	});
}

// <====== HELPER FUNCTIONS ======>

// <--- Debug mode toggler --->
function debug() {
	debugMode = !debugMode;
	debugButton.innerText = debugMode ? "Debug Mode: On" : "Debug Mode: Off";

	// <- If debug mode is false, clear the list and input ->
	if (!debugMode) {
		taskList.innerHTML = "";
		input.value = "";
		console.clear();
	}
}

// function saveTask(task) {
// 	<- Convert the input field back to a task ->
// 	const text = document.createElement("p");
// 	text.innerText = input.value;
// 	task.replaceChild(text, input);
// }

// function cancelTask(task) {
// 	<- Convert the input field back to a task ->
// 	const text = document.createElement("p");
// 	text.innerText = savedText;
// 	task.replaceChild(text, input);
// }

// <====== EVENT LISTENERS ======>

// <--- Add button listener --->
addButton.addEventListener("click", (e) => {
	e.preventDefault();
	input.value === "" ? input.focus() : addTask();
});

// <--- Debug mode listeners ---> //!not dry
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		debugButton.classList.toggle("hidden");
		if (debugMode) {
			debug();
		}
	}
});

debugButton.addEventListener("click", (e) => {
	runTests();
	debug();
});

// <====== FACTORIES! ======>

// <--- Factory for buttons --->
function buttonFactory({ classList, text, func }) {
	const button = document.createElement("button");

	// <- Assign id and text to the button ->
	button.innerText = text;
	button.classList.add(classList);

	// <- Execute function on the button's parent element ->
	button.addEventListener("click", (e) => func(e.target.parentElement));
	return button;
}

// <--- don't know about this one --->F
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
