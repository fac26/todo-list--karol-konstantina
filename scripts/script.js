const debugButton = document.querySelector("#debug-button");
const addButton = document.querySelector("#add-button");
const deleteButton = document.querySelector("#delete-button");
const completeButton = document.querySelector("#complete-button");
const urgentButton = document.querySelector("#urgent-button");
const editButton = document.querySelector("#edit-button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

//  <-- debug mode - set to true to see console.log messages -->
let debugMode = false;

debugButton.addEventListener("click", (e) => {
	//on debug button click, toggle debug mode
	if (debugMode) {
		debugMode = false;
		console.log("Debug mode off");
		debugButton.innerHTML = "Debug Mode: Off";
	} else {
		debugMode = true;
		console.log("Debug mode on");
		debugButton.innerHTML = "Debug Mode: On";
	}
});

//  <-- function to log messages to the console only in debug mode (use instead of console.log in testing) -->
// const log = (message) => {
// 	if (debugMode) {
// 		console.log(message);
// 	}
// };

//  <-- addTask function (add a task to the list) -->

(function addTask(newTask) {
	addButton.addEventListener("click", (e) => {
		e.preventDefault();
		if (input.value === "") {
			alert("Please enter a task"); //convert to
		} else {
			newTask = list.appendChild(document.createElement("li"));
			newTask.innerText = input.value;
		}
	});
})();

//  <-- deleteTask function (delete a task from the list) -->

(function deleteTask() {
	deleteButton.addEventListener("click", (e) => {
		e.preventDefault();
	});
})();

//  <-- completeTask function (mark a task as complete) -->
(function completeTask() {
	completeButton.addEventListener("click", (e) => {
		e.preventDefault();
	});
})();

//  <-- urgentTask function (mark as urgent) -->
(function urgentTask() {
	urgentButton.addEventListener("click", (e) => {
		e.preventDefault();
	});
})();

//  <-- editTask function (edit the contents of a task) -->
(function editTask() {
	editButton.addEventListener("click", (e) => {
		e.preventDefault();
	});
})();