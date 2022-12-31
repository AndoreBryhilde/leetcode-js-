You are given an m x n integer array grid where grid[i][j] could be:
1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Example 1:
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths: 
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:
Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.
 
Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 20
1 <= m * n <= 20
-1 <= grid[i][j] <= 2
There is exactly one starting cell and one ending cell.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    if(grid.length==0&&grid[0].length==0)return 0;
    var ret = 0;
    var x,y,count=0;
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){y = i;x = j;}
            if(grid[i][j] == 0)count++; 
        }
    }
    DFS(grid,x,y,count,0);
    return ret;

    function DFS(grid,x,y,count,step) {
        if( y<0 || y>grid.length-1 || x<0 || x>grid[0].length-1 ) return;
        if(grid[y][x] == -1 || grid[y][x] == -2) return;
        if(grid[y][x] == 0){
            grid[y][x] = -2;
            step++;
        }
        if(grid[y][x] == 2 && step == count){
            ret++;
            return;
        }
        if(grid[y][x] == 2 && step != count) return;
        if(grid[y][x] == 1) grid[y][x] = -1;

        DFS(grid,x+1,y,count,step);
        DFS(grid,x-1,y,count,step);
        DFS(grid,x,y+1,count,step);
        DFS(grid,x,y-1,count,step);
        grid[y][x] = 0; 
    };
}
