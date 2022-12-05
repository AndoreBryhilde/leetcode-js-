Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

Example 1:
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.

Example 2:
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
 
Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let a=[...new Set(nums)].sort((a,b)=>b-a);
  return a[2]??a[0];
}

//sometimes faster than before
var thirdMax = function(nums) {
    let s=new Set(nums);
    if(s.size<3){
        return Math.max(...s);
    }else{
        s.delete(Math.max(...s));
        s.delete(Math.max(...s));
    }
    return Math.max(...s)
};


 
