Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

Example 2:
Input: nums = [5], k = 9
Output: 0
 
Constraints:
1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
2 <= k <= 104

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums,k) {
    let set=new Array(k).fill(0);let tmp=0;let ret=0;  
    for(let i=0;i<nums.length;i++){  
        tmp=(tmp+nums[i])%k;
        tmp=(tmp<0?tmp+k:tmp);
        set[tmp]++;
    }
    for(let i=0;i<k;i++){if(set[i]>1){ret+=(set[i]*(set[i]-1))/2;}}
    ret += set[0];
    return ret;            
}
