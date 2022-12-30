Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
Implement KthLargest class:
KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

Example 1:
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
Output
[null, 4, 5, 5, 8, 8]

Explanation
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
 
Constraints:

1 <= k <= 104
0 <= nums.length <= 104
-104 <= nums[i] <= 104
-104 <= val <= 104
At most 104 calls will be made to add.
It is guaranteed that there will be at least k elements in the array when you search for the kth element.

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k=k;
    this.nums=nums.sort((a,b)=>b-a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    //for(let i=0;i<this.nums.length;i++){
        //if(val<this.nums[i]){continue;}else{this.nums.splice(i,0,val)}
    //}
    this.nums.push(val);this.nums.sort((a,b)=>b-a)
    return this.nums[this.k-1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

//更佳的方式 使用heap紀錄

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.values = []
    this.k = k
    for(const num of nums) this.add(num)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.values.push(val)
    this.bubbleUp()
    if(this.values.length > this.k) this.pop()
    return this.values[0]
};

KthLargest.prototype.bubbleUp = function(passedIndex) {
    const index = passedIndex || this.values.length - 1
    const parentIndex = Math.floor((index - 1) / 2)
    if(this.values[parentIndex] > this.values[index]) {
        this.swap(index, parentIndex)
        this.bubbleUp(parentIndex)
    }
}

KthLargest.prototype.pop = function() {
    this.swap(0, this.values.length - 1)
    const result = this.values.pop()
    this.bubbleDown()
    return result;
}

KthLargest.prototype.bubbleDown = function(passedIndex) {
    const parentIndex = passedIndex || 0
    const child1Index = parentIndex * 2 + 1
    const child2Index = parentIndex * 2 + 2

    const parent = this.values[parentIndex]
    let child1 = Infinity, child2 = Infinity
    if(this.values[child1Index] !== undefined) child1 = this.values[child1Index]
    if(this.values[child2Index] !== undefined) child2 = this.values[child2Index]

    const smallest = Math.min(child1, child2)
    if(smallest === Infinity || smallest > parent) return;

    if(smallest === child1) {
        this.swap(parentIndex, child1Index)
        this.bubbleDown(child1Index)
    }
    else if(child2 !== Infinity) {
        this.swap(parentIndex, child2Index)
        this.bubbleDown(child2Index)
    }
}

KthLargest.prototype.swap = function(index1, index2) {
    const temp = this.values[index1]
    this.values[index1] = this.values[index2]
    this.values[index2] = temp
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

