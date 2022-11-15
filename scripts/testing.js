// <====== TEST HELPERS ======>

const equal = (actual, expected, message) => {
	actual === expected
		? console.info("Pass: " + (message || `Expected ${expected} and received ${actual}`))
		: console.error("Fail: " + (message || `Expected ${expected} but received ${actual} instead`));
};

function test(name, testFunction) {
	console.group(name);
	testFunction();
	console.groupEnd();
}

// <====== TESTS ======>

function runTests() {
	// <--- Test 1: addTask function --->
	test("add Task", () => {
		input.value = "Testing Task";
		addButton.click();
		const task = taskList.querySelector("#task-0");
		// <- Test 1.1: clear input field ->
		test("addTask() should clear the input field", () => {
			const result = `"${input.value}"`;
			const expected = '""';
			equal(result, expected);
		});

		// <- Test 1.2: add task to list ->
		test("addTask() should add a new task to the list", () => {
			const result = taskList.contains(task);
			const expected = true;
			equal(result, expected);
		});
	});

	// <--- Test 2: button factory --->
	test("buttonFactory()", () => {
		// <- Test 2.1: create a button ->
		test("buttonFactory() should create a button", () => {
			const result = buttonFactory({ id: "test", text: "Test" }).nodeName;
			const expected = "BUTTON";
			equal(result, expected);
		});

		// <- Test 2.2: assign elements to button ->
		test("buttonFactory() should assign id and text to the button", () => {
			const button = buttonFactory({ id: "button-id", text: "testButton" });
			const result = `"${button.id}, ${button.innerText}"`;
			const expected = `"button-id, testButton"`;
			equal(result, expected);
		});
	});

	// <--- Test 3: completeTask function --->
	test("completeTask()", () => {
		input.value = "Completed Task";
		addButton.click();
		const task = taskList.querySelector("#task-1");
		// <- Test 3.1: toggle completed class ->
		test("completeTask() should toggle the completed class", () => {
			completeTask(task);
			const result = task.classList.contains("completed");
			const expected = true;
			equal(result, expected);

			return task;
		});
		// <- Test 3.2: move task to bottom of list ->
		test("completeTask() should move the task to the bottom of the list", () => {
			const completeButton = task.querySelector("#complete");
			completeButton.click();
			const result = taskList.lastChild.id;
			const expected = "task-1";
			equal(result, expected);
		});
	});

	// <--- Test 4: urgentTask function --->
	test("urgentTask()", () => {
		input.value = "Urgent Task";
		addButton.click();
		const task = taskList.querySelector("#task-2");
		// <- Test 4.1: toggle urgent class ->
		test("urgentTask() should toggle the urgent class", () => {
			urgentTask(task);
			const result = task.classList.contains("urgent");
			const expected = true;
			equal(result, expected);
		});
		// <- Test 4.2: move task to top of list ->
		test("urgentTask() should move the task to the top of the list", () => {
			const urgentButton = task.querySelector("#urgent");
			urgentButton.click();
			const result = taskList.firstChild.id;
			const expected = "task-2";
			equal(result, expected);
		});
	});

	// <--- Test 5: editTask function --->
	test("editTask()", () => {
		input.value = "Edited Task";
		addButton.click();
		const task = taskList.querySelector("#task-3");
		// <- Test 5.1: convert task to input field ->
		test("editTask() should convert the task to an input field", () => {
			const editButton = task.querySelector("#edit");
			editButton.click();
			const result = task.querySelector("input").nodeName;
			const expected = "INPUT";
			equal(result, expected);
		});

		// <- Test 5.2: task should save if de-focused ->
		test("editTask() should save the task if the input field is de-focused", () => {
			const input = task.querySelector("input");
			input.value = "Saved Task";
			input.blur();
      const query = task.querySelector("p");
			const result = inputField.value;
			const expected = "Saved Task";
			equal(result, expected);
		});
	});

	// <--- Test 6: deleteTask function --->
	test("deleteTask()", () => {
		// <- Test 6.1: remove task from list ->
	});
}

// <====== DEPRECATED TESTS ======>

// test("addTask() returns the added task", () => {
//   const result = testTask;
//   const expected = testValue;
//   equal(result, expected, `addTask returned "${expected}"`);
// });

// test("Debug Mode", () => {
// 	equal(debugMode, true, "Debug mode is on");
// 	equal(debugButton.innerText, "Debug Mode: On", "Debug button text is correct'");
// });

// test("addTask() should add the tasks to local storage", () => {
//   const result = localStorage.getItem("tasks");
//   const expected = localStorage.getItem("tasks");
//   equal(result, expected, "Tasks have been added to local storage");
// });
/// let tasksArray = []; tasksArray.push(task);

// BUGGY TEST
// test("delete Task", () => {
// 	test("deleteTask() should remove the task from the list", () => {
// 		const secondTask = taskList.children[1];
// 		const deleteButton = secondTask.querySelector("#delete");
// 		deleteButton.click();
// 		const result = taskList.innerHTML.includes(testValue2);
// 		const expected = false;
// 		equal(result, expected, "Task has been removed from the list");
// 	});
// });

// <====== DISTANT FUTURE TESTS ======>

// <--- Test 7: clearCompleted function --->
// test("clearCompleted()", () => {
//   <- Test 7.1: remove all completed tasks ->
// });

// <--- Test 8: clearAll function --->
// test("clearAll()", () => {
//  <- Test 8.1: remove all tasks ->
// });

// <--- Test 9: saveTasks function --->
// test("saveTasks()", () => {
// 	<- Test 9.1: save tasks to local storage ->
// });

// <--- Test 10: loadTasks function --->
// test("loadTasks()", () => {
// 	<- Test 10.1: load tasks from local storage ->
// });

// <--- Test 11: filterTasks function --->
// test("filterTasks()", () => {
// 	<- Test 11.1: filter tasks by urgent ->
// 	<- Test 11.2: filter tasks by completed ->
// });

// <--- Test 12: sortTasks function --->
// test("sortTasks()", () => {
// 	<- Test 12.1: sort tasks by urgent ->
// 	<- Test 12.2: sort tasks by completed ->
// });

// <--- Test 13: toggleDarkMode function --->
// test("toggleDarkMode()", () => {
// 	<- Test 13.1: toggle dark mode ->
// });
