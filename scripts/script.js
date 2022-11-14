const debugButton = document.querySelector("#debug-button");
const addButton = document.querySelector("#add-button");
const input = document.querySelector("input");
const taskList = document.querySelector("ul");

let debugMode = false;

// <====== Functions ======>

// <--- addTask function (add a task to the list) --->
function addTask(string) {
	const task = input.value;
	if (!task) return;
	const listItem = document.createElement("li");
	const listText = document.createElement("p");
	listText.innerText = task;
	listItem.append(listText);
	taskList.append(listItem);
	input.value = "";

	// <--- Create buttons --->
	const deleteButton = document.createElement("button");
	deleteButton.id = "delete";
	deleteButton.innerText = "Delete";
	listItem.append(deleteButton);
	deleteButton.addEventListener("click", (e) => {
		deleteTask(listItem);
	});

	const completeButton = document.createElement("button");
	completeButton.id = "complete";
	completeButton.innerText = "Complete";
	listItem.append(completeButton);
	completeButton.addEventListener("click", (e) => {
		completeTask(listItem);
	});

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
const deleteTask = (task) => {
	task.remove();
};

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

// <--- addTask listener --->
addButton.addEventListener("click", (e) => {
	e.preventDefault();
	input.value !== "" ? addTask() : alert("No task entered");
});

// <--- debugMode listener --->
debugButton.addEventListener("click", (e) => {
	debugMode ? (debugMode = false) : (debugMode = true);
	debugMode ? (debugButton.innerText = "Debug Mode: On") : (debugButton.innerText = "Debug Mode: Off");
});
