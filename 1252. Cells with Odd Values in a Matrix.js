There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.
For each location indices[i], do both of the following:
Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

Example 1:
Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

Example 2:
Input: m = 2, n = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
 
Constraints:
1 <= m, n <= 50
1 <= indices.length <= 100
0 <= ri < m
0 <= ci < n

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let row=new Array(m).fill(0);
    let col=new Array(n).fill(0);
    let ans=0;
    for(let [r,c] of indices){row[r]++;col[c]++;}
    for(let r of row){for(let c of col){ans+=(r+c)%2;}}
    return ans;
};

//a faster way 

var oddCells = function(m, n, indices) {
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    
    for (let i = 0; i < indices.length; i ++) {
        const [r, c] = indices[i];
        rows[r] ^= 1;
        cols[c] ^= 1;
    }
    const rowOdd = rows.filter(r => r).length;
    const colOdd = cols.filter(c => c).length;

    return (m - rowOdd) * colOdd + (n - colOdd) * rowOdd;
};
