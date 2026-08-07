// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A: Print the first N terms of the Fibonacci sequence
// -----------------------------------------------------------------------------
/**
 * Prints the first N terms of the Fibonacci sequence on one line.
 * @param {number} n - Number of terms to display (must be a positive integer).
 */
function printFibonacci(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  const terms = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    terms.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log('Fibonacci sequence: ' + terms.join(' '));
}

// -----------------------------------------------------------------------------
// PART B: Check if a number belongs to the Fibonacci sequence
// -----------------------------------------------------------------------------
/**
 * Checks whether a given number is a Fibonacci number.
 * Generates Fibonacci numbers in a loop until we reach or exceed the target.
 * @param {number} num - The number to check.
 * @returns {boolean} true if num is a Fibonacci number, false otherwise.
 */
function isFibonacci(num) {
  if (num < 0) return false;

  let a = 0, b = 1;

  // Walk the sequence until we reach or pass num
  while (a < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  // If a landed exactly on num, it's a Fibonacci number
  return a === num;
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
function main() {
  // --- Part A ---
  const n = readlineSync.questionInt('How many terms? ');
  printFibonacci(n);

  // --- Part B ---
  console.log('');
  const num = readlineSync.questionInt('Enter a number to check: ');

  if (isFibonacci(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}

main();
