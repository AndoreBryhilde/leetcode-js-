Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.

//速度取決於排序的速度
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(e=>e*e).sort((a,b)=>a-b);
};

var sortedSquares = function(nums) {
    const ans = new Array(nums.length);
    
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let numL = nums[left];
        let numR = nums[right];
        
        if (Math.abs(numL) > Math.abs(numR)) {
            ans[i] = numL ** 2;
            left++;
        } else {
            ans[i] = numR ** 2;
            right--;            
        }
    }
    
    return ans;
};
