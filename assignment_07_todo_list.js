// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
// =============================================================================

const readlineSync = require('readline-sync');

// The array that holds all tasks
let tasks = [];

// -----------------------------------------------------------------------------
// Display the menu
// -----------------------------------------------------------------------------
function printMenu() {
  console.log('\n============================');
  console.log('       TO-DO LIST MENU');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');
}

// -----------------------------------------------------------------------------
// Feature 1: Add a task
// -----------------------------------------------------------------------------
/**
 * Prompts the user for a task description and adds it to the tasks array.
 */
function addTask() {
  const task = readlineSync.question('Enter task: ').trim();

  if (task === '') {
    console.log('Error: Task description cannot be empty.');
    return;
  }

  tasks.push(task);
  console.log(`Task added: "${task}"`);
}

// -----------------------------------------------------------------------------
// Feature 2: View all tasks
// -----------------------------------------------------------------------------
/**
 * Displays all tasks currently in the array.
 */
function viewTasks() {
  if (tasks.length === 0) {
    console.log('Your to-do list is empty. Add a task to get started!');
    return;
  }

  console.log('\nYour Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

// -----------------------------------------------------------------------------
// Feature 3: Delete a task
// -----------------------------------------------------------------------------
/**
 * Shows the task list and removes the task at the user's chosen number.
 */
function deleteTask() {
  if (tasks.length === 0) {
    console.log('No tasks to delete. Your list is already empty.');
    return;
  }

  viewTasks();

  const choice = readlineSync.questionInt('\nEnter task number to delete: ');
  const index = choice - 1;  // Convert 1-based input to 0-based index

  if (index < 0 || index >= tasks.length) {
    console.log(`Error: Invalid task number. Please enter a number between 1 and ${tasks.length}.`);
    return;
  }

  const removed = tasks[index];
  tasks.splice(index, 1);
  console.log(`Task "${removed}" has been removed.`);
}

// -----------------------------------------------------------------------------
// MAIN: Keep the menu running until the user quits
// -----------------------------------------------------------------------------
function main() {
  console.log('Welcome to your To-Do List!');

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        deleteTask();
        break;
      case 4:
        console.log('Goodbye!');
        return;  // Exit the loop and end the program
      default:
        console.log('Error: Invalid choice. Please enter a number between 1 and 4.');
    }
  }
}

main();
