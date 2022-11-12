var containsDuplicate = function(nums) {
    let n = new Set(nums);
    return nums.length != n.size;
};