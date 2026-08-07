// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// Arithmetic operation functions
// -----------------------------------------------------------------------------

/** @param {number} a @param {number} b @returns {number} */
function add(a, b)      { return a + b; }

/** @param {number} a @param {number} b @returns {number} */
function subtract(a, b) { return a - b; }

/** @param {number} a @param {number} b @returns {number} */
function multiply(a, b) { return a * b; }

/**
 * Divides a by b. Returns null if b is zero.
 * @param {number} a @param {number} b @returns {number|null}
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

/**
 * Returns the remainder of a divided by b. Returns null if b is zero.
 * @param {number} a @param {number} b @returns {number|null}
 */
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}

/** @param {number} a @param {number} b @returns {number} */
function exponentiate(a, b) { return a ** b; }

// -----------------------------------------------------------------------------
// Display the menu
// -----------------------------------------------------------------------------
function printMenu() {
  console.log('\n============================');
  console.log('       SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

// -----------------------------------------------------------------------------
// Prompt for two numbers and run the chosen operation
// -----------------------------------------------------------------------------
/**
 * Reads two numbers from the user, calls the operation function,
 * and prints the result (or an error on division by zero).
 * @param {Function} operationFn  - One of the arithmetic functions above.
 * @param {string}   symbol       - Operator symbol for display (e.g. '+').
 */
function runOperation(operationFn, symbol) {
  const a = readlineSync.questionFloat('Enter first number : ');
  const b = readlineSync.questionFloat('Enter second number: ');

  const result = operationFn(a, b);

  if (result === null) {
    console.log('Error: Cannot divide by zero.');
  } else {
    console.log(`Result: ${a} ${symbol} ${b} = ${parseFloat(result.toFixed(2))}`);
  }
}

// -----------------------------------------------------------------------------
// MAIN: Keep the calculator running until the user quits
// -----------------------------------------------------------------------------
function main() {
  console.log('Welcome to the Simple Calculator!');

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    switch (choice) {
      case 1: runOperation(add,          '+');  break;
      case 2: runOperation(subtract,     '-');  break;
      case 3: runOperation(multiply,     '*');  break;
      case 4: runOperation(divide,       '/');  break;
      case 5: runOperation(modulus,      '%');  break;
      case 6: runOperation(exponentiate, '**'); break;
      case 7:
        console.log('Goodbye!');
        return;
      default:
        console.log('Error: Invalid choice. Please enter a number between 1 and 7.');
    }
  }
}

main();
