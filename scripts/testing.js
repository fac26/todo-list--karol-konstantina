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
	if (debugMode) {
		test("addTask() returns the added task", () => {
			equal(addTask("Test"), "Test", "addTask() should return the task that was added");
		});

		test("addTask() should add a new task to the list", () => {
			if (taskList.lastChild.innerText === "Test") {
				result = true;
			}
		});
	}
	//undo all changes made while in debug mode
	if (!debugMode) {
		input.value = "";
		taskList.innerHTML = "";
		debugMode = false;
	}
});
