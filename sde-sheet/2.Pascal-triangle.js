/**
 * Problem Statement: Given an integer N,
 *  return the first N rows of Pascal’s triangle.

In Pascal’s triangle, each number is the sum of the two numbers directly above
 it as shown in the figure below:
 * 
 Input Format: N = 5

Result:
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Explanation: There are 5 rows in the output matrix.
 Each row corresponds to each one of the rows in the image shown above.
 any inner element is obtained by doing the sum of the 2 values present 
 in the row just above it, i.e., if the element is at index (i, j),
  then matrix[i][j] can be obtained by doing matrix[i – 1][j – 1] + matrix[i – 1][j].

  we need to first create an array of size N or numRows (input value).
   This array is used to store each of the rows expected in the output, 
   so, for example, array[1] = [1,1]. In this array, the number of columns (say, numCols)
    is equal to the number of the i-th row + 1 (Since, 0-indexed), i.e.,
     for 0-th row, numCols = 1. So, the number of columns is different for each row.
*/

class SDESheet{
    pascals(numRows){
        if(numRows === 0) return [];
        if(numRows ===1) return [[1]];
        let result=[];
        //starting from row 1
        for(let row=1;row<=numRows;row++){
            let arr=[];
            for(let col=0;col<row;col++){
                if(col === 0 || col === row-1){
                    arr.push(1);
                }
                else{
                    arr.push(result[row-2][col-1] + result[row-2][col])
                }
            }
            result.push(arr);
        }
        return result;
    }
}

let mat = new SDESheet();

console.log(mat.pascals(5)); 

//[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]