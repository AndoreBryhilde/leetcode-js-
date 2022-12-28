You are given a 0-indexed integer array piles, where piles[i] represents the number of stones in the ith pile, and an integer k. You should apply the following operation exactly k times:
Choose any piles[i] and remove floor(piles[i] / 2) stones from it.
Notice that you can apply the operation on the same pile more than once.
Return the minimum possible total number of stones remaining after applying the k operations.
floor(x) is the greatest integer that is smaller than or equal to x (i.e., rounds x down).

Example 1:
Input: piles = [5,4,9], k = 2
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12.

Example 2:
Input: piles = [4,3,6,7], k = 3
Output: 12
Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [4,3,3,7].
- Apply the operation on pile 3. The resulting piles are [4,3,3,4].
- Apply the operation on pile 0. The resulting piles are [2,3,3,4].
The total number of stones in [2,3,3,4] is 12.

Constraints:
1 <= piles.length <= 105
1 <= piles[i] <= 104
1 <= k <= 105

//利用keetcode函式庫MaxPriorityQueue(即maxheap)處理
/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let queue = new MaxPriorityQueue();
    piles.forEach((e)=>{queue.enqueue(e);})
    while(k--){queue.enqueue(Math.ceil(queue.dequeue().element/2));}
    let ans=0
    while(queue.size()){ans+=queue.dequeue().element;}
    return ans;
};

//better way
var minStoneSum = function(piles, k) {
    const heap = new MaxHeap(piles);
    
    let totalSum = heap.values.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < k; i++) {
        const largest = heap.removeLargest();
        
        heap.add(Math.ceil(largest / 2));
        totalSum -= Math.floor(largest / 2);
        
        if (totalSum < 1) {
            return 1;
        }
    }
    
    return totalSum;
};

function MaxHeap(nums) {
    this.values = [];
    
    for (let num of nums) {
        this.add(num);
    }
}

MaxHeap.prototype.add = function(val) {
    this.values.push(val);
    
    let valIndex = this.values.length - 1;
    
    while (valIndex > 0) {
        const parentIndex = Math.floor((valIndex - 1) / 2);
    
        if (this.values[parentIndex] <= this.values[valIndex]) {
            const parent = this.values[parentIndex];
            
            this.values[parentIndex] = val;
            this.values[valIndex] = parent;
            
            valIndex = parentIndex;
        } else break;
    }
    
    return this.values;
}

MaxHeap.prototype.removeLargest = function() {
    let currLargest = this.values[0];
    let last = this.values.pop();
    this.values[0] = last;
    
    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    
    while(true) {
        let swap = null;
        
        const leftChildIndex = (index * 2) + 1;
        const rightChildIndex = (index * 2) + 2;
        
        let leftChild, rightChild;
        
        if (leftChildIndex < length) {
            leftChild = this.values[leftChildIndex];

            if (leftChild > current) swap = leftChildIndex;
        }
        
        if (rightChildIndex < length) {
            rightChild = this.values[rightChildIndex];
            
            if (
                (swap === null && rightChild > current) ||
                (swap !== null && rightChild > leftChild)
            ) swap = rightChildIndex;
        }
        
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = current;
        index = swap;
    }
    
    return currLargest;
}
