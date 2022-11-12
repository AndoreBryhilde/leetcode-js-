fast
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;
    let m = {};

    for(let i =0;i<nums.length;i++){
        let e = nums[i];
        if(i-m[e]<=k){return true;}
        m[e] = i;
    }
    return false;
};

    
slow
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;
    let m = {};
    let a = false;
    nums.forEach((e,i)=>{if(i-m[e]<=k){a = true;}m[e] = i;});
    return a;
};