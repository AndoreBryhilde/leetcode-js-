Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 
Constraints:
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const min=Math.min(...nums);const max=Math.max(...nums);
    const counts=Array(max-min+1).fill(0);let i=0;
    for(const num of nums){counts[num-min]++;}
    for(let j=0;j<counts.length;j++){
        while(counts[j]){nums[i]=min+j;i++;counts[j]--;}   
    }
    return nums;
}

//slow way
var sortArray = function(nums) {
    if(nums.length <=1) return nums;
    var middle = Math.floor(nums.length / 2);
    var left = nums.slice(0, middle);
    var right = nums.slice(middle);
    return merge(sortArray(left), sortArray(right));
};
function merge(left, right){
  var result = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}
