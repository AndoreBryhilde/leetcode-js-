You are given an integer array nums and two integers minK and maxK.
A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

Example 2:
Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

Constraints:
2 <= nums.length <= 105
1 <= nums[i], minK, maxK <= 106

//給指定陣列，尋找有多少子陣列包含最低值為minK，最高值為maxK。
//slide window
//設立left作為參考點，表示低於minK或高於maxK的數(即不可被包含的數)
//後逐個更新min，max及left的位置。


/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let ans=0;
    let left=-1;
    let min=-1;
    let max=-1;

    for(let i=0;i<nums.length;i++){
        if(nums[i]<minK||nums[i]>maxK){left=i;}
        if(nums[i]==maxK){max=i;}
        if(nums[i]==minK){min=i;}
        ans+=Math.max(0,Math.min(min,max)-left);
    }
    return ans;
};
/* 
    let left=0;let right=0;
    let min=-1;let max=-1;
    let n=nums.length;
    let ans=0;
    for(let i=0;i<n;i++){
        if(nums[i]<minK||nums[i]>maxK){min=-1;max=-1;left=right+1;}
        if(nums[right]==minK){min=right;}
        if(nums[right]==maxK){max=right;}
        if(min!=-1&&max!=-1){ans+=Math.min(min,max)-left+1;}
        right++;
    }
    return ans;
*/
