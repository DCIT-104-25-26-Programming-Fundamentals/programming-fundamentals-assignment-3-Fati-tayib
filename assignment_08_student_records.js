// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
// =============================================================================

const readlineSync = require('readline-sync');

// Array to store all student records
let students = [];

// -----------------------------------------------------------------------------
// UTILITY: Calculate the average of an array of scores
// -----------------------------------------------------------------------------
/**
 * Returns the average of a scores array, rounded to 2 decimal places.
 * @param {number[]} scores
 * @returns {string} Average formatted to 2 decimal places.
 */
function calculateAverage(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  return (total / scores.length).toFixed(2);
}

// -----------------------------------------------------------------------------
// UTILITY: Find a student by ID
// -----------------------------------------------------------------------------
/**
 * Searches the students array for a student with the given ID.
 * @param {number} id
 * @returns {object|null} The student object, or null if not found.
 */
function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// -----------------------------------------------------------------------------
// Display the menu
// -----------------------------------------------------------------------------
function printMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

// -----------------------------------------------------------------------------
// Feature 1: Add a student
// -----------------------------------------------------------------------------
/**
 * Prompts the user for a student's name, ID, and scores, then saves the record.
 */
function addStudent() {
  const name = readlineSync.question('Student name: ').trim();
  if (name === '') {
    console.log('Error: Name cannot be empty.');
    return;
  }

  const id = readlineSync.questionInt('Student ID: ');

  // Prevent duplicate IDs
  if (findStudentById(id) !== null) {
    console.log(`Error: A student with ID ${id} already exists.`);
    return;
  }

  const numScores = readlineSync.questionInt('How many scores? ');
  if (numScores <= 0) {
    console.log('Error: Number of scores must be a positive integer.');
    return;
  }

  const scores = [];
  for (let i = 1; i <= numScores; i++) {
    const score = readlineSync.questionFloat(`Enter score ${i}: `);
    scores.push(score);
  }

  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}

// -----------------------------------------------------------------------------
// Feature 2: Display all students
// -----------------------------------------------------------------------------
/**
 * Prints a formatted table of all students, their scores, and their averages.
 */
function displayAllStudents() {
  if (students.length === 0) {
    console.log('No student records found. Add a student first.');
    return;
  }

  console.log('\n' + '='.repeat(65));
  console.log(
    'Name'.padEnd(20) +
    'ID'.padEnd(12) +
    'Scores'.padEnd(25) +
    'Average'
  );
  console.log('='.repeat(65));

  for (let i = 0; i < students.length; i++) {
    const s = students[i];
    const scoresStr = s.scores.join(', ');
    const avg = calculateAverage(s.scores);

    console.log(
      s.name.padEnd(20) +
      String(s.id).padEnd(12) +
      scoresStr.padEnd(25) +
      avg
    );
  }

  console.log('='.repeat(65));
}

// -----------------------------------------------------------------------------
// Feature 3: Calculate average score for a specific student
// -----------------------------------------------------------------------------
/**
 * Asks for a student ID and prints that student's average score.
 */
function calculateStudentAverage() {
  const id = readlineSync.questionInt('Enter student ID: ');
  const student = findStudentById(id);

  if (student === null) {
    console.log(`Error: No student found with ID ${id}.`);
    return;
  }

  const avg = calculateAverage(student.scores);
  console.log(`${student.name}'s average score: ${avg}`);
}

// -----------------------------------------------------------------------------
// MAIN: Keep the menu running until the user quits
// -----------------------------------------------------------------------------
function main() {
  console.log('Welcome to the Student Record Management System!');

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addStudent();
        break;
      case 2:
        displayAllStudents();
        break;
      case 3:
        calculateStudentAverage();
        break;
      case 4:
        console.log('Goodbye!');
        return;
      default:
        console.log('Error: Invalid choice. Please enter a number between 1 and 4.');
    }
  }
}

main();
