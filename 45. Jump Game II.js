You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2
 
Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step=0;let count=0;let next=0;let last=0;
    while(step<nums.length-1){
        for(let i=last;i<=step;i++){
            if(i+nums[i]>next){next=i+nums[i];}
            if(next>=nums.length){return count+1;}
        }
        count++;last=step;step=next;
    }
    return count;
};
