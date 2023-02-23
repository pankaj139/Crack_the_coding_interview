/* Given tan image represnted by an NxN matrix, where each pixel in the image is 4 bytes. Write a method to rotate the image by 90 degrees. Can you do this in place. */

function rotateMatrix(matrix) {
    let len = matrix.length;
    const newMatrix = new Array(len);
    for(let i = 0; i < len; i++) {
        newMatrix[i] = new Array(len).fill(0);
    }
    for(let i = 0 ; i < len; i++){
        for(let j = 0; j < len; j++){
            newMatrix[i][j] = matrix[len-j-1][i];
            
        }
    }
    return newMatrix
}

function rotateMatrixInPlace(matrix) {
    let len = matrix.length;

    for(let i = 0; i < len/2; i++) {
        let first = i;
        let last = len - 1 - i;
        for(let j = first; j < last; j++){
            let offset = j - first;
            let top = matrix[first][j];

            //left -> top
            matrix[first][j] = matrix[last-offset][first];

            //bottom -> left
            matrix[last-offset][first] = matrix[last][last-offset];

            //right -> bottom

            matrix[last][last-offset] = matrix[j][last];

            //top -> right
            matrix[j][last] = top;
        }
    }
    return matrix;
}

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(rotateMatrix(matrix));
console.log(rotateMatrixInPlace(matrix));
