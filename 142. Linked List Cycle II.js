Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 
Constraints:
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};

//分析

const find_cycle_start = (head) => {
  let cycle_length=0;
  let slow=head;
  let fast=head;
  while(fast&&fast.next){
    slow=slow.next;
    fast=fast.next.next;
    if(slow===fast){
      cycle_length=calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
}
//尋找迴圈長度
const calculate_cycle_length=(slow)=>{
  let curr=slow;
  let cycle_length=0;
  while(true){
    curr=curr.next;
    cycle_length+=1;
    if(curr===slow){break;}
  }
  return cycle_length;
}
//尋找迴圈起點
const find_start = (head, cycle_length) {
  let pointer1=head;
  let pointer2=head;
  while(cycle_length>0){
    pointer2=pointer2.next;
    cycle_length-=1;
  }
  while(pointer1!==pointer2){
    pointer1=pointer1.next;
    pointer2=pointer2.next;
  }
  return pointer1;
}
