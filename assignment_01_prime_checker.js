// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Checks whether a given number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} true if num is prime, false otherwise.
 */
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function main() {
  const number = readlineSync.questionInt('Enter a number: ');

  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
}

main();
