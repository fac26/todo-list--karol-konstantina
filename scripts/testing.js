test ('Adds new task', () => {
    const input= document.querySelector('input');//step 1
    //step 1 is to test if the empty input field where the user enters their
    // new task decription is accepting input text as expected.
    input.value='test';//step 2
    //step 2 is adding 'test' to the input field so that we can then check if a new task
    // containing 'test' has been created. 
    const submitButton= document.querySelector("button[type='submit']");
    submitButton.click();//step 3
    //step 3 is selecting the 'submit' button and pretends that the user is clicking on it
    //with the .click() function.It simulates what the user is doing.
    const result= document.querySelector("#result");
    equal(result.textContent,"test");//step 4 is dependent on the html element, named here #result
    //element, that contains the new task entry by the user. The query selector is selecting it.
    result.textContent="";//step 5 
    //an optional step to revert this test, so that no other tests are impacted.
    });

