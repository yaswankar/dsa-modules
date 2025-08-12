// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// In-place approach without use of any extra space
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const firstRowHasZero = matrix[0].includes(0);
    const firstColHasZero = matrix.some(row => row[0] === 0);

    for(let i = 1; i<m; i+=1) {
        for(let j=1; j<n; j+=1) {
            if(matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    for(let i = 1; i<m; i+=1) {
        for(let j=1; j<n; j+=1) {
            if(!matrix[i][0] || !matrix[0][j]) {
                matrix[i][j] = 0;
            }
        }
    }

    if(firstRowHasZero) {
        for (let j=0; j<n; j++) {
            matrix[0][j] = 0;
        }
    }

    if(firstColHasZero) {
        for (let i=0; i<m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};
