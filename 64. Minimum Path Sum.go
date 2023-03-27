func minPathSum(grid [][]int) int {
    m:=len(grid)
    n:=len(grid[0])
    for i:=0;i<m;i++ {
        for j:=0;j<n;j++ {
            if i==0&&j==0 {
                grid[i][j]=grid[i][j]
                continue
            }else if j==0 {
                grid[i][j]+=grid[i-1][j]
                continue
            }else if i==0 {
                grid[i][j]+=grid[i][j-1]
                continue
            }else if grid[i-1][j]<grid[i][j-1] {
                grid[i][j]+=grid[i-1][j]
            }else{
                grid[i][j]+=grid[i][j-1]
            }
        }
    }
    return grid[m-1][n-1];
}
