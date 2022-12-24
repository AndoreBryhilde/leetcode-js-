You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.
Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.
In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

Example 1:
Input: n = 3
Output: 5
Explanation: The five different ways are show above.

Example 2:
Input: n = 1
Output: 1

Constraints:
1 <= n <= 1000

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    let m=10**9+7;
    let d=Array(n+1);d[0]=1;d[1]=1;d[2]=2;
    for(let i=3;i<=n;++i){
        d[i]=(d[i-1]*2+d[i-3])%m;
    }
    return d[n];
};
