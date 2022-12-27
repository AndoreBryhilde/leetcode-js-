Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example 2:
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.

Constraints:
nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums.length<2)return 1;
    let map={};let len=Array(50000).fill(0);
    let t=[];let p=-1;let ans=Infinity;
    nums.forEach((e,i)=>{if(map[e]){map[e].push(i);}else{map[e]=[i];}len[e]+=1;});
    let max=Math.max(...len);
    while(true){p=len.indexOf(max,p+1);if(p==-1)break;t.push(p);}
    for(let e of t){let min=map[e][max-1]-map[e][0];if(min<ans){ans=min;}}
    return ans+1;
};

// a better way
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = {};
    let degree = 0;
    let options = [];
    for (let i = 0; i < nums.length; i++) {
        let arr = map[nums[i]]
        if (arr) {
            arr.push(i)
        } else {
            arr = [i]
        }
        nd = Math.max(arr.length, degree)
        if (nd != degree) {
            options = [];
        }
        
        if (arr.length === nd) {
            options.push(nums[i])
        }
        degree = nd;
        map[nums[i]] = arr;
    }
    if (degree === 1) return 1;
    if (degree === 0) return 0;
    let ml = Number.POSITIVE_INFINITY;
    for (let i = 0; i < options.length; i++) {
        
        ml = Math.min(ml, map[options[i]][map[options[i]].length - 1] - map[options[i]][0] + 1);
    }
    return ml;
};
