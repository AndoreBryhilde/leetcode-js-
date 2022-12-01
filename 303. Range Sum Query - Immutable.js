/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let sum=0;
    this.arr =[];
    nums.forEach((e)=>{
        sum=sum+e;
        this.arr.push(sum)
    });
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left==0)return this.arr[right];
    return this.arr[right]-this.arr[left-1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
