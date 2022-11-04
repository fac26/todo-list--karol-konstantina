# To-do list

The aim of this project is to build a to-do list tracker, allowing users to create, complete and delete tasks from a list with the intention to practice test-driven development. As a minimum viable product, the app should have the following features:

- A button to **create** a task,
- A button to **delete** a task,
- A checkbox to mark a task as **completed**,
- A checkbox to mark a task as **urgent**.
- A checkbox to **filter** completed tasks.

## *Workflow*

There are 4 branches: **main, html, css, testing**. The main branch is protected and can only be committed to using pull requests. The branches will be pulled downstream and cycle back to main.

```mermaid
    gitGraph
        commit
        branch html
        commit
        branch css
        commit
        branch testing
        commit
        checkout main
        commit
        checkout testing
        merge main
 ```
 
## *Website Demo*

<div align=center">

![Demo](https://media0.giphy.com/media/enj50kao8gMfu/giphy.gif?cid=ecf05e47w3jb6h5mg8vtqr96ojqgq288flac0qcjw4ez7m88&rid=giphy.gif&ct=g)

</div>

## *Testing*

Test-driven development is the methodology of writing tests before your code and following an ongoing cycle of **fail, pass, and refactor.** In this section you will find the tests and methods we have used and instructions on how to execute them.

- Press /button/, enable debug mode,

    ```js
  window.addEventListener("keydown", (event) => {
    ...
  });
    ```
    
- Press /button/, run test 1,
- Press /button/, run test 2, etc...

## *Project Acceptance Criteria*

- A working to-do list,
- Tests for each user story,
- A responsive, mobile-first design,
- Accessible to as many users as possible.

## *Credits*

This project is being built from the ground up by:

<a href="https://github.com/fac26/todo-list--karol-konstantina/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fac26/todo-list--karol-konstantina" />
</a>
