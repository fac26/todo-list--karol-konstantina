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

	test("addTask() function", () => {
		const testValue = (input.value = "Test Task");
		const testTask = addTask(testValue);

		test("addTask() returns the added task", () => {
			const result = testTask;
			const expected = "Test Task";
			equal(result, expected, `addTask returned "${expected}"`);
		});

		test("addTask() should add a new task to the list", () => {
			const result = taskList.lastChild.innerText;
			const expected = testValue;
			equal(result, expected, "addTask added a new task to the list");
		});

		test("addTask() should clear the input field", () => {
			const result = input.value;
			const expected = "";
			equal(result, expected, "addTask cleared the input field");
		});
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
