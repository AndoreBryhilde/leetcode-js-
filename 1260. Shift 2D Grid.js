Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
In one shift operation:
Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

Example 1:
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]

Example 2:
Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

Example 3:
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    for(let i=0;i<k;i++){
        grid=trans(grid);
    }
    return grid;
};

function trans(grid){
    const l=grid.length;
    const m=grid[0].length
    const ans=Array(l).fill(0).map(_=>Array(m));
    for(let i=0;i<l;i++){
        for(let j=0;j<m;j++){
            if(i==l-1&&j==m-1){ans[0][0]=grid[i][j];}
            else if(j==m-1){ans[i+1][0]=grid[i][j];}
            else{ans[i][j+1]=grid[i][j];}
        }
    }
    return ans;
}

// a better way with Math solve
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    const vector = new Array(m * n).fill(0)
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            vector[((i * n) + j + k) % vector.length] = grid[i][j];
        }
    }
    for (let l = 0; l < vector.length; l ++) {
        grid[Math.floor(l / n)][l % n] = vector[l];
    }
    return grid;
};
