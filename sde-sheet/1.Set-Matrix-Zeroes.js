/***
 * Set Matrix Zero
   Problem Statement: Given a matrix if an element in the matrix is 0 then you will
    have to set its entire column and row to 0 and then return the matrix.
 * 
   Examples 1:

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output: [[1,0,1],[0,0,0],[1,0,1]]

Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.
 
Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row,
 1st column and 4th column will be set to 0

Intuition: Instead of traversing through each row and column,
 we can use dummy arrays to check if the particular row or column has an element 0 or not,
 which will improve the time complexity.

Approach:Take two dummy array one of size of row and other of size of column.
Now traverse through the array.If matrix[i][j]==0 then set dummy1[i]=0(for row) and dummy2[j]=0(for column).
Now traverse through the array again and if dummy1[i]==0  || dummy2[j]==0 then arr[i][j]=0,else continue.
*/
class SDESheet{
 setZeroes(matrix){

    let rows = matrix.length;
    let cols = matrix[0].length;
    let dummy1 = new Array(matrix.length);
    let dummy2 = new Array(matrix[0].length);

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j] == 0){
                dummy1[i]=0;
                dummy2[j]=0;
            }
        }
    }

    for(let row=0;row<rows;row++){
        if(dummy1[row] === 0){
            matrix[row] = Array(matrix[0].length).fill(0);
            continue;
            // because the whole array is already set to 0,
            // no need to check each value's column has 0 or not, 
            // for updating the individual value to 0.
        }
        for(let col=0;col<matrix[0].length;col++){
            if(dummy2[col] ===0){
                matrix[row][col]=0;
            }
        }
    }
    return matrix;
}

}

var samplematrix = [[1,1,1],[1,0,1],[1,1,1]];
var samplematrix2= [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

let mat = new SDESheet();

console.log(mat.setZeroes(samplematrix2));