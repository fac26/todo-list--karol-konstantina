## _Information for Code Review_

- Tests will appear after toggling debug mode using the debug mode button.
- The default action buttons at the bottom do nothing and should be removed later.
- At the moment, only the delete button has full functionality. 
- The edit button has partial functionality
- Github pages might not be deploying properly, so just clone it and deploy locally.

## _To-do list_


The aim of this project is to build a to-do list tracker, allowing users to create, complete and delete tasks from a list with the intention to practice test-driven development. As a minimum viable product, the app should have the following features:

- A button to **create** a task,
- A button to **delete** a task,
- A checkbox to mark a task as **urgent**,
- A checkbox to mark a task as **completed**,
- A checkbox to **filter** completed tasks.

## _Workflow_

There are 4 branches: **main, markup-and-styling, test, and function**.

```mermaid
    gitGraph
        commit
        branch markup-and-styling
        commit
        checkout main
        commit
        checkout markup-and-styling
        merge main
        checkout main
        branch test
        commit
        checkout main
        commit
        checkout test
        merge main
        checkout main
        branch function
        commit
        checkout main
        commit
        checkout function
        merge main
        checkout main

```

## _Website Demo_

<div align=center">

![Demo](https://media0.giphy.com/media/enj50kao8gMfu/giphy.gif?cid=ecf05e47w3jb6h5mg8vtqr96ojqgq288flac0qcjw4ez7m88&rid=giphy.gif&ct=g)

</div>

## _Testing_

Test-driven development is the methodology of writing tests before your code and following an ongoing cycle of **fail, pass, and refactor.** In this section you will find the tests and methods we have used and instructions on how to execute them.

```mermaid
    graph TD
    A[Fail]-->B[Pass]-->C[Refactor]-->A

    style A fill:#a12273
    style B fill:#6a8993
    style C fill:#9b5c35
```

Instructions for testing:

1. Debug button can be toggled with "ESCAPE"
2. Open the console window with "F12"
3. Click the debug button to display tests inside the console.
4. Toggling the debug button or clicking it again will clear the console and any test tasks in the DOM.

<div align="center">

</div>

## _Project Acceptance Criteria_

- A working to-do list, [
https://github.com/fac26/todo-list--karol-konstantina/issues/8
]
- Tests for each user story, [
https://github.com/fac26/todo-list--karol-konstantina/issues/1 
https://github.com/fac26/todo-list--karol-konstantina/issues/2 
https://github.com/fac26/todo-list--karol-konstantina/issues/3 
https://github.com/fac26/todo-list--karol-konstantina/issues/4 
https://github.com/fac26/todo-list--karol-konstantina/issues/5
]
- A responsive, mobile-first design, [
https://github.com/fac26/todo-list--karol-konstantina/issues/7
]
- Accessible to as many users as possible. [
https://github.com/fac26/todo-list--karol-konstantina/issues/6
]

## _Credits_

This project is being built from the ground up by:

<a href="https://github.com/fac26/todo-list--karol-konstantina/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fac26/todo-list--karol-konstantina" width="100px"/>
</a>
