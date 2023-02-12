We have n chips, where the position of the ith chip is position[i].
We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
position[i] + 2 or position[i] - 2 with cost = 0.
position[i] + 1 or position[i] - 1 with cost = 1.
Return the minimum cost needed to move all the chips to the same position.

Example 1:
Input: position = [1,2,3]
Output: 1
Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
Second step: Move the chip at position 2 to position 1 with cost = 1.
Total cost is 1.

Example 2:
Input: position = [2,2,2,3,3]
Output: 2
Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.

Example 3:
Input: position = [1,1000000000]
Output: 1

Constraints:
1 <= position.length <= 100
1 <= position[i] <= 10^9

/*
給定Array，Array[i] 代表位置 Array[i]上有1枚硬幣，要將所有硬幣移到一個點上，移兩格不用代價，移一格要1個代價，代價最少是多少？
即先尋找出偶數位跟奇數位各有多少，然後較少的移動。
如 [1,2,3] --> 移動到1 --> 移動2到1(1格)--> 3到1(不花費) -->共1個花費
*/
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let count=0;
    for(let e of position){count+=e%2;}
    return Math.min(count,position.length-count);
};
