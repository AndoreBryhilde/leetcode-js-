/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p=0;
    nums.forEach((e,i)=>{
        if(e!=0){
            if(p!=i){
                nums[p]=e;
                nums[i]=0;
            }
           p =p+1;
           }
    });
};