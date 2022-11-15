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
