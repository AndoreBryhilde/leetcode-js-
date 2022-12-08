Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
 
Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let t=new Set(nums);
    let ans=[];
    nums.forEach((e,i)=>{if(!(t.has(i+1)))ans.push(i+1);})
    return ans;
};
