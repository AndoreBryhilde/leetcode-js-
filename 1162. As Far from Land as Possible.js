Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.
The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

Example 1:
Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:
Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.
 
Constraints:
n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1
/*
建立距離地圖，陸地舊設為0，從上及左側開始跑一遍，再從右側及下方跑回來
之後挑選距離最大的
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    const rl=grid.length;
    const cl=grid[0].length;
    const count = Array(rl).fill(0).map(_=>Array(cl).fill(Infinity));
    for (let r=0;r<rl;r++) {
        for (let c =0;c<cl;c++) {
            if(grid[r][c]){count[r][c]=0;continue;}
            if(r>0){count[r][c]=Math.min(count[r][c],count[r-1][c]+1);} 
            if(c>0){count[r][c]=Math.min(count[r][c],count[r][c-1]+1);}
        }
    }
    for(let r=rl-1;r>=0;r--){
        for(let c=cl-1;c>=0;c--){
            if(r<rl-1){count[r][c]=Math.min(count[r][c],count[r+1][c]+1);} 
            if(c<cl-1){count[r][c]=Math.min(count[r][c],count[r][c+1]+1);}
        }
    }
    let ans=0;
    for (let r=0;r<rl;r++) {
        for(let c=0;c<cl;c++) {
            if (!grid[r][c]){ans=Math.max(ans,count[r][c]);}
        }
    }
    return (!ans||ans===Infinity)?-1:ans;
};
//a slow way
var maxDistance = function(grid) {
    let land=[];let ans=-1;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]){land.push([i,j]);}
        }
    }
    if(land.length==0){return -1;}
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==0){
                let dis=[];
                land.forEach((e)=>
                dis.push(Math.abs(i-e[0])+Math.abs(j-e[1]))
                );
                ans=Math.max(ans,Math.min(...dis));
            }
        }
    }
    return ans;
};
