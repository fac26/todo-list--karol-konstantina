// <====== TEST HELPERS ======>

function equal(actual, expected, message) {
	if (actual === expected) {
		console.info("Pass: " + (message || `Expected ${expected} and received ${actual}`));
	} else {
		console.error("Fail: " + (message || `Expected ${expected} but received ${actual} instead`));
	}
}

function test(name, testFunction) {
	console.group(name);
	testFunction();
	console.groupEnd();
}

// <====== TESTS ======>

function runTests() {
	const testValue = (input.value = "Test Task");
	const testTask = addTask(testValue);

	// <--- Test 1: addTask function --->
	test("add Task", () => {
		// <- Test 1.1: clear input field ->
		test("addTask() should clear the input field", () => {
			const result = input.value;
			const expected = "";
			equal(result, expected, "Input field has been cleared");
		});

		// <- Test 1.2: add task to list ->
		test("addTask() should add a new task to the list", () => {
			const result = taskList.children.length > 0;
			const expected = true;
			equal(result, expected, `New task has been added to the list`);
		});
	});

	// <--- Test 2: button factory --->
	test("buttonFactory()", () => {
		// <- Test 2.1: create a button ->
		test("buttonFactory() should create a button", () => {
			let result = buttonFactory({ id: "test", text: "Test", func: () => {} });
			result = result.nodeName;
			const expected = "BUTTON";
			equal(result, expected, `Button has been created`);
		});

		// <- Test 2.2: assign id to button ->
		// <- Test 2.3: assign text to button ->
		// <- Test 2.4: assign function to button ->
	});

	// <--- Test 3: completeTask function --->
	test("completeTask()", () => {
		// <- Test 3.1: toggle completed class ->
		// <- Test 3.2: move task to bottom of list ->
	});

	// <--- Test 4: urgentTask function --->
	test("urgentTask()", () => {
		// <- Test 4.1: toggle urgent class ->
		// <- Test 4.2: move task to top of list ->
	});

	// <--- Test 5: editTask function --->
	test("editTask()", () => {
		// <- Test 5.1: convert task to input field ->
		// <- Test 5.2: add save button ->
		// <- Test 5.3: add cancel button ->
		// <- Test 5.4: save button should save changes ->
		// <- Test 5.7: save button should remove save and cancel buttons ->
		// <- Test 5.5: cancel button should convert input field back to task ->
		// <- Test 5.6: cancel button should remove save and cancel buttons ->
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
