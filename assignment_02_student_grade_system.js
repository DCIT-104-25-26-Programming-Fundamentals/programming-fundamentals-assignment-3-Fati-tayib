// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Returns the letter grade for a given score.
 * @param {number} score - The student's score (expected 0–100).
 * @returns {string|null} Letter grade ('A'–'F'), or null if score is out of range.
 */
function getGrade(score) {
  if (score < 0 || score > 100) {
    return null;
  }

  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

function main() {
  const score = readlineSync.questionInt('Enter student score (0-100): ');
  const grade = getGrade(score);

  if (grade === null) {
    console.log('Error: Score must be between 0 and 100.');
  } else {
    console.log(`Grade: ${grade}`);
  }
}

main();
