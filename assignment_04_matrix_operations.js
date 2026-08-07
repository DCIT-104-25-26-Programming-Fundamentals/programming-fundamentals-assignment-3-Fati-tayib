// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// UTILITY: Read a matrix from user input
// -----------------------------------------------------------------------------
/**
 * Reads an M x N matrix from the user.
 * @param {number} rows
 * @param {number} cols
 * @returns {number[][]}
 */
function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row;
    while (true) {
      const input = readlineSync.question(`Enter row ${i + 1}: `);
      row = input.trim().split(/\s+/).map(Number);
      if (row.length === cols && row.every(n => !isNaN(n))) break;
      console.log(`Please enter exactly ${cols} number(s) separated by spaces.`);
    }
    matrix.push(row);
  }
  return matrix;
}

// -----------------------------------------------------------------------------
// UTILITY: Print a matrix in a neat aligned grid
// -----------------------------------------------------------------------------
/**
 * Prints a matrix to the console in a padded grid format.
 * @param {number[][]} matrix
 */
function printMatrix(matrix) {
  // Find the widest number so all columns line up
  let maxWidth = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const len = String(matrix[i][j]).length;
      if (len > maxWidth) maxWidth = len;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i].map(n => String(n).padStart(maxWidth)).join('  ');
    console.log(row);
  }
}

// -----------------------------------------------------------------------------
// PART A: Transpose
// -----------------------------------------------------------------------------
/**
 * Returns the transpose of a matrix (rows become columns).
 * @param {number[][]} matrix
 * @returns {number[][]}
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Result is cols x rows
  const result = [];
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// PART B: Matrix Addition
// -----------------------------------------------------------------------------
/**
 * Returns the element-wise sum of two same-sized matrices.
 * @param {number[][]} A
 * @param {number[][]} B
 * @returns {number[][]}
 */
function addMatrices(A, B) {
  const rows = A.length;
  const cols = A[0].length;

  const result = [];
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(A[i][j] + B[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// PART C: Matrix Multiplication
// -----------------------------------------------------------------------------
/**
 * Returns the matrix product A x B.
 * A is M x N, B is N x P, result is M x P.
 * @param {number[][]} A
 * @param {number[][]} B
 * @returns {number[][]}
 */
function multiplyMatrices(A, B) {
  const M = A.length;
  const N = A[0].length;  // also = B.length
  const P = B[0].length;

  const result = [];
  for (let i = 0; i < M; i++) {
    const newRow = [];
    for (let j = 0; j < P; j++) {
      let sum = 0;
      for (let k = 0; k < N; k++) {
        sum += A[i][k] * B[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// MAIN
// -----------------------------------------------------------------------------
function main() {
  console.log('=== Matrix Operations ===\n');

  // --- Part A: Transpose ---
  console.log('--- Part A: Transpose ---');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');
  const matA = readMatrix(rowsA, colsA);

  console.log('\nOriginal Matrix:');
  printMatrix(matA);
  console.log('\nTransposed Matrix:');
  printMatrix(transposeMatrix(matA));

  // --- Part B: Matrix Addition ---
  console.log('\n--- Part B: Matrix Addition ---');
  const rowsB = readlineSync.questionInt('Enter number of rows: ');
  const colsB = readlineSync.questionInt('Enter number of columns: ');

  console.log('\nEnter Matrix 1:');
  const mat1 = readMatrix(rowsB, colsB);
  console.log('\nEnter Matrix 2:');
  const mat2 = readMatrix(rowsB, colsB);

  console.log('\nMatrix 1:');
  printMatrix(mat1);
  console.log('\nMatrix 2:');
  printMatrix(mat2);
  console.log('\nSum:');
  printMatrix(addMatrices(mat1, mat2));

  // --- Part C: Matrix Multiplication ---
  console.log('\n--- Part C: Matrix Multiplication ---');
  console.log('Matrix A (M x N):');
  const M = readlineSync.questionInt('Enter number of rows for A: ');
  const N = readlineSync.questionInt('Enter number of columns for A: ');
  const matX = readMatrix(M, N);

  console.log(`\nMatrix B (${N} x P) — must have ${N} rows:`);
  const P = readlineSync.questionInt('Enter number of columns for B: ');
  const matY = readMatrix(N, P);

  console.log('\nMatrix A:');
  printMatrix(matX);
  console.log('\nMatrix B:');
  printMatrix(matY);
  console.log('\nProduct (A x B):');
  printMatrix(multiplyMatrices(matX, matY));
}

main();
