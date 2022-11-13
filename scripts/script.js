const debugButton = document.querySelector("#debug-button");
const addButton = document.querySelector("#add-button");
const input = document.querySelector("input");
const taskList = document.querySelector("ul");

// <--- Testing buttons (probably useless) --->
const deleteButton = document.querySelector("#delete-button");
const completeButton = document.querySelector("#complete-button");
const urgentButton = document.querySelector("#urgent-button");
const editButton = document.querySelector("#edit-button");

let debugMode = false;

// <====== Functions ======>

// <--- addTask function (add a task to the list) --->
function addTask(string) {
	const task = input.value;
	if (!task) return;
	const listItem = document.createElement("li");
	listItem.innerText = task;
	taskList.append(listItem);
	input.value = "";
	return task;
	// unsure {
	// create and append delete button to the new Task
	// create and append complete button to the new Task
	// create and append urgent button to the new Task
	// create and append edit button to the new Task
	// }
	// create list item
	// append list item to list
	// clear input
}
// <--- deleteTask function (delete a task from the list) --->
function deleteTask(task) {
	//remove the parent task from the list
}

// <--- completeTask function (complete a task) --->
function completeTask(task) {
	// add a strike-through to the parent task
	// add id to the parent task to indicate it is complete
	// add a class to the task to indicate it is complete
}

// <--- urgentTask function (make a task urgent) --->
function urgentTask(task) {
	// add a class to the task to indicate it is urgent
}

// <--- editTask function (edit a task) --->
function editTask(task) {
	//convert the task to an input field
	//add a save button to the task
	//add a cancel button to the task
}

// <===== Event Listeners ======>

// <--- debugMode listener --->
debugButton.addEventListener("click", (e) => {
	//on debug button click, toggle debug mode
	if (debugMode) {
		debugMode = false;
		console.log("Debug mode off");
		debugButton.innerText = "Debug Mode: Off";
	} else {
		debugMode = true;
		console.log("Debug mode on");
		debugButton.innerText = "Debug Mode: On";
	}
});

// <--- addTask listener --->
addButton.addEventListener("click", (e) => {
	e.preventDefault();
	addTask();
	// if input has a value add task with that value otherwise alert user
});

// <--- deleteTask listener --->
deleteButton.addEventListener("click", (e) => {
	e.preventDefault();
	//on click of delete button, delete the associated task
});

// <--- completeTask listener --->
completeButton.addEventListener("click", (e) => {
	e.preventDefault();
	//on click of complete button, mark the associated task as complete
});

//  <-- urgentTask listener -->
urgentButton.addEventListener("click", (e) => {
	e.preventDefault();
	//on click of urgent button, mark the associated task as urgent
});

//  <-- editTask function (edit the contents of a task) -->
editButton.addEventListener("click", (e) => {
	e.preventDefault();
	//on click of edit button, allow the user to edit the associated task
});
