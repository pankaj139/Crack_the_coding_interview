/* Write a algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. */
function zeroMatrix(matrix){
    let row = [];
    let column = [];

    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == 0){
                row.push(i);
                column.push(j);
            }
        }
    }
    for(let i = 0; i < row.length; i++){
        for(let j = 0 ; j < matrix[0].length; j++){
            matrix[row[i]][j] = 0;
        }
    }
    console.log(column);
    for(let i = 0; i < column.length; i++){
        for(let j = 0 ; j < matrix.length; j++){
            matrix[j][column[i]] = 0;
        }
    }
    return matrix;


}

const matrix = [[0,1,2,4],[4,6,3,0],[6,4,6,3]];
console.log(zeroMatrix(matrix));