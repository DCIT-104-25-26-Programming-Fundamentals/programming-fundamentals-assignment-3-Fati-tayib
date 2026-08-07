// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in the array.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of all numbers in the array.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  let sum = calculateSum(arr);
  return sum / arr.length;
}

/**
 * Finds the maximum value in the array.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in the array.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  const numbers = [];
  for (let i = 1; i <= n; i++) {
    const num = readlineSync.questionFloat(`Enter number ${i}: `);
    numbers.push(num);
  }

  console.log('\nResults:');
  console.log(`Sum:     ${calculateSum(numbers)}`);
  console.log(`Average: ${calculateAverage(numbers)}`);
  console.log(`Maximum: ${calculateMax(numbers)}`);
  console.log(`Minimum: ${calculateMin(numbers)}`);
}

main();
