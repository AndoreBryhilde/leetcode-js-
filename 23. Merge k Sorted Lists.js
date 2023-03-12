You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
 
Constraints:
k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr=[];
    for(let e of lists){
        let node=e;
        while(node){arr.push(node.val);node=node.next;}
    }
    if(!arr.length){return null;}
    arr.sort((a,b)=>a-b);
    let list=new ListNode(arr[0],null);let node=list;
    for(let i=1;i<arr.length;i++){
        let n=new ListNode(arr[i],null);
        node.next=n;
        node=node.next;
    }
    return list;
};

//a slow way but could use less memory
var mergeKLists = function(lists) {
    if(!lists.length){return null;}
    while(lists.length>1){
        let l1=lists.shift();
        let l2=lists.shift();
        lists.unshift(mergeTwoLists(l1,l2));
    }
    return lists[0];
};
var mergeTwoLists = function(l1, l2) {
    let ans=new ListNode();
    let t=ans;

    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            t.next=l1;
            l1=l1.next;
        }else{
            t.next=l2;
            l2=l2.next;
        }
        t=t.next;
    }
    l1===null?(t.next =l2):(t.next=l1);
    return ans.next;
};
