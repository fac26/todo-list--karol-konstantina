# To-do tracker

The aim of this project is to build a to-do list tracker, allowing users to create, complete and delete tasks from a list with the intention to practice test-driven development. As a minimum viable product, the app should have the following features:

- A button to **create** a task,
- A button to **delete** a task,
- A checkbox to mark a task as **completed**,
- A checkbox to mark a task as **urgent**.
- A checkbox to **filter** completed tasks.

## Workflow

There are 4 branches: main, html, css, testing. The main branch is protected and can only be committed to using pull requests. The branches will be pulled downstream and cycle back to main.

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



## Testing

Test-driven development is a methodology where you write tests before your code and follow an ongoing cycle of **fail, pass, and refactor.**<br>
In this section you will find the tests and methods we have used and instructions on how to execute them.

## Project Acceptance Criteria

- A working to-do list,
- Tests for each user story,
- A responsive, mobile-first design,
- Accessible to as many users as possible.

## Credits

This project is being built from the ground up by:

<a href="https://github.com/fac26/todo-list--karol-konstantina/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fac26/todo-list--karol-konstantina" />
</a>
