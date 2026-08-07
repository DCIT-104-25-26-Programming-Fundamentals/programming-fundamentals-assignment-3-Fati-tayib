// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A: Print a single multiplication table (1–12) for a given number
// -----------------------------------------------------------------------------
/**
 * Prints the multiplication table for a single number from 1 to 12.
 * @param {number} num - The number to generate the table for.
 */
function printSingleTable(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const result = num * i;
    // Pad each part so columns stay neatly aligned
    const left   = String(num).padStart(3);
    const middle = String(i).padStart(2);
    const right  = String(result).padStart(4);
    console.log(`${left}  x  ${middle}  = ${right}`);
  }
}

// -----------------------------------------------------------------------------
// PART B: Print tables for every number from 1 to N
// -----------------------------------------------------------------------------
/**
 * Prints multiplication tables for all numbers from 1 to N,
 * separated by a divider line.
 * @param {number} n - Upper limit (must be a positive integer).
 */
function printAllTables(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  const DIVIDER = '---------------------------';

  for (let i = 1; i <= n; i++) {
    printSingleTable(i);
    if (i < n) {
      console.log(DIVIDER);
    }
  }
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
function main() {
  // --- Part A: Single table ---
  console.log('--- Part A: Single Table ---');
  const numA = readlineSync.questionInt('Enter a number: ');

  if (numA <= 0 || !Number.isInteger(numA)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  printSingleTable(numA);

  // --- Part B: Tables from 1 to N ---
  console.log('\n--- Part B: Tables from 1 to N ---');
  const numB = readlineSync.questionInt('Enter N to print tables from 1 to N: ');
  console.log('');
  printAllTables(numB);
}

main();
