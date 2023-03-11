Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.
 
 Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = []
Output: []
 
Constraints:
The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105

var sortedListToBST = function(head) {
    if(!head){return null;}
    if(!head.next){return new TreeNode(head.val);} 
    let slow=head;let fast=head;let pre=null;
    while(fast&&fast.next){
        pre=slow;
        slow=slow.next;
        fast=fast.next.next;
    }
    pre.next=null;
    let newRoot=new TreeNode(slow.val);
    newRoot.left=sortedListToBST(head);
    newRoot.right=sortedListToBST(slow.next);
    return newRoot;
};
