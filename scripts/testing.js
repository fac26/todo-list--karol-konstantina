function equal(actual, expected, message) {
	if (actual === expected) {
		const defaultMessage = `Expected ${expected} and received ${actual}`;
		console.info("Pass: " + (message || defaultMessage));
	} else {
		const defaultMessage = `Expected ${expected} but received ${actual} instead`;
		console.error("Fail: " + (message || defaultMessage));
	}
}

function test(name, testFunction) {
	console.group(name);
	testFunction();
	console.groupEnd(name);
}

debugButton.addEventListener("click", (e) => {
	debugMode;
	const testValue = (input.value = "Test Task");
	const testTask = addTask(testValue);

	const testValue2 = (input.value = "Test Task 2");
	const testTask2 = addTask(testValue2);

	test("add Task", () => {
		test("addTask() returns the added task", () => {
			const result = testTask;
			const expected = testValue;
			equal(result, expected, `addTask returned "${expected}"`);
		});

		test("addTask() should clear the input field", () => {
			const result = input.value;
			const expected = "";
			equal(result, expected, "Input field has been cleared");
		});

		//setTimeout(() => {
		test("addTask() should add a new task to the list", () => {
			const result = taskList.children[0].children[0].innerText;
			const expected = testValue;
			equal(result, expected, `"${expected}" task has been added to the list`);
		});
		//}, 1000);

		test("addTask() should add a delete button to the new task", () => {
			// result should be if the last task in the list has a delete button
			const result = taskList.children[0].children[1].id === "delete";
			const expected = true;
			equal(result, expected, "Last task in the list has a delete button");
		});

		test("completetask() should mark a task as complete", () => {});
	});

	if (!debugMode) {
		input.value = "";
		taskList.innerHTML = "";
	}
});

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
