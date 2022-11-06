# To-do list

The aim of this project is to build a to-do list tracker, allowing users to create, complete and delete tasks from a list with the intention to practice test-driven development. As a minimum viable product, the app should have the following features:

- A button to **create** a task,
- A button to **delete** a task,
- A checkbox to mark a task as **urgent**,
- A checkbox to mark a task as **completed**,
- A checkbox to **filter** completed tasks.

## _Workflow_

There are 4 branches: **main, html, css, testing**.

```mermaid
    gitGraph
        commit
        branch html
        commit
        checkout main
        commit
        checkout html
        merge main
        checkout main
        branch css
        commit
        checkout main
        commit
        checkout css
        merge main
        checkout main
        branch testing
        commit
        checkout main
        commit
        checkout testing
        merge main
        checkout main

```

## _Website Demo_

<div align=center">

![Demo](https://media0.giphy.com/media/enj50kao8gMfu/giphy.gif?cid=ecf05e47w3jb6h5mg8vtqr96ojqgq288flac0qcjw4ez7m88&rid=giphy.gif&ct=g)

</div>

## _Testing_

Test-driven development is the methodology of writing tests before your code and following an ongoing cycle of **fail, pass, and refactor.** In this section you will find the tests and methods we have used and instructions on how to execute them.

<details>

- Press /button/, enable debug mode,

  ```js
  window.addEventListener("keydown", (event) => {
  ...
  });
  ```

- Press /button/, run test 1,
- Press /button/, run test 2, etc...

</details>

<div align="center">

```mermaid
    graph TD
    A[Fail]-->B[Pass]-->C[Refactor]-->A

    style A fill:#a12273
    style B fill:#6a8993
    style C fill:#9b5c35
```

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
