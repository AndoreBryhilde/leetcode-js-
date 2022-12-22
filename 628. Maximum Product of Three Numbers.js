Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

Example 2:
Input: nums = [1,2,3,4]
Output: 24

Example 3:
Input: nums = [-1,-2,-3]
Output: -6
 
Constraints:
3 <= nums.length <= 104
-1000 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let p=[-Infinity,-Infinity,-Infinity];
    let n=[Infinity,Infinity];
    nums.forEach((e)=>{
        if(e>p[0]){p[2]=p[1];p[1]=p[0];p[0]=e;}
        else if(e>p[1]){p[2]=p[1];p[1]=e;}
        else if(e>p[2]){p[2]=e;}
        if(e<n[0]){n[1]=n[0];n[0]=e;}
        else if(e<n[1]){n[1]=e;}
    })
    return Math.max(p[0]*p[1]*p[2],p[0]*n[0]*n[1]);
};
