You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 
Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

//javascript
var mergeTwoLists = function(l1, l2) {
    let ans = new ListNode();
    let t = ans;

    while(l1 != null && l2 !=null){
        if(l1.val <= l2.val){
            t.next = l1;
            l1 = l1.next;
        }else{
            t.next = l2;
            l2 = l2.next;
        }
        t = t.next;
    }
    l1 === null?(t.next =l2):(t.next=l1);
    return ans.next;
};

//go lang
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    if list1==nil {
        return list2;
    }
    if list2==nil {
        return list1;
    }
    if list1.Val<list2.Val {
        list1.Next=mergeTwoLists(list1.Next,list2);
        return list1;
    }else{
        list2.Next=mergeTwoLists(list1,list2.Next);
        return list2;
    }
}
