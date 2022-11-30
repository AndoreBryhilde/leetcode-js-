var missingNumber = function(nums) {
    let t=0;
    for(let i=0;i<nums.length;i++){
       t = t^i;
       t = t^nums[i];
    }
    return t^nums.length;
};

var missingNumber = function(nums) {
    let correctSum = (1 + nums.length)* nums.length/2
    let currentSum = nums.reduce((a, b) => a + b);
    return correctSum - currentSum;
};