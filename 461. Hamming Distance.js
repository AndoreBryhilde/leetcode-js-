The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

Example 1:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.

Example 2:
Input: x = 3, y = 1
Output: 1
 
Constraints:
0 <= x, y <= 231 - 1

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let a=0
    let t=(x^y);
    while(t>0){ a+=t%2;t>>=1;}
    return a;
};
