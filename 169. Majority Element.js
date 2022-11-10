var majorityElement = function(nums) {
    let t = nums[0];
    let c = 1;
    for(let i=1;i<nums.length;i++){
        if(t==nums[i]){
            c = c+1;
        }else{
            c = c-1;
        }
        if(c==0){
            c = c+1;
            t = nums[i]
        }
    }
    return t;
};