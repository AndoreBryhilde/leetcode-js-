You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
 
Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 
Constraints:
0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const ans=[];
    let s=null;let e=null
    for (let i=0;i<=nums.length;i++) {
      const t=nums[i];
      if(!i){s=t;e=t;}
      else if(e+1===t){e=t;}
      else{ans.push(s!=e?`${s}->${e}`:`${s}`);s=t;e=t;} 
    }
    return ans;
};

//original way
function summaryRanges(nums){
        let ans=[];
        let i=0;
        let j=0;
        while(j<nums,length){
            if(j<len(nums)-1&&(nums[j+1]-nums[j]==1)){j=j+1;}
            else{
                if(i==j){
                    ans.push(nums[j]+'');
                    j=j+1;
                    i=j;
                }else{
                    ans.push((nums[i]+'')+"->"+(nums[j]+''));
                    j=j+1;
                    i=j;
                }
            }               
        }  
        return ans;
}
