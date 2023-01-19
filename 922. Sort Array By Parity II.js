Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.

Example 1:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:
Input: nums = [2,3]
Output: [2,3]
 
Constraints:
2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000
 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let i=0,j=1,n=nums.length;
    while(i<n&&j<n){
        while(i<n&&nums[i]% 2==0){i+=2;}
        while(j<n&&nums[j]%2==1){j+=2;}
        if(i<n&&j<n){let t=nums[i];nums[i]=nums[j];nums[j]=t;}
    }
    return nums;
};
