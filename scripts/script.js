const debugButton = document.querySelector("#debug-button");
const addButton = document.querySelector("#add-button");
const deleteButton = document.querySelector("#delete-button");
const completeButton = document.querySelector("#complete-button");
const urgentButton = document.querySelector("#urgent-button");
const editButton = document.querySelector("#edit-button");

//  <-- debug mode - set to true to see console.log messages -->
let debugMode = false;

debugButton.addEventListener("click", (e) => {
	//on debug button click, toggle debug mode
	if (debugMode) {
		debugMode = false;
		debugButton.innerHTML = "Debug Mode: Off";
	} else {
		debugMode = true;
		debugButton.innerHTML = "Debug Mode: On";
	}
});

//  <-- function to log messages to the console only in debug mode (use instead of console.log in testing) -->
const log = (message) => {
	if (debugMode) {
		console.log(message);
	}
};

//  <-- addTask function (add a task to the list) -->
addButton.addEventListener("click", (e) => {
	e.preventDefault();

	(function functionName() {
		log("functionName function called");
	})();
});

//  <-- deleteTask function (delete a task from the list) -->
deleteButton.addEventListener("click", (e) => {
	e.preventDefault();
});

//  <-- completeTask function (mark a task as complete) -->
completeButton.addEventListener("click", (e) => {
	e.preventDefault();
});

//  <-- urgentTask function (mark as urgent) -->
urgentButton.addEventListener("click", (e) => {
	e.preventDefault();
});

//  <-- editTask function (edit the contents of a task) -->
editButton.addEventListener("click", (e) => {
	e.preventDefault();
});

//my version of the newTask function so that you can run the test named ('Adds new task).
//function newTask(){

//};
//document.getElementById("submitButton").addEventListener("click", newTask);