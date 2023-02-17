Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

Example 1:

Input: root = [4,2,6,1,3]
Output: 1

Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1
 
Constraints:
The number of nodes in the tree is in the range [2, 100].
0 <= Node.val <= 105

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let ans=Infinity;let temp=null;
    function track(node){
        if(!node)return;
        track(node.left);
        if(temp){
            ans=(node.val-temp.val)<ans?(node.val-temp.val):ans;
        }
        temp=node;
        track(node.right);
    }
    track(root);
    return ans;
};
//go lang
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDiffInBST(root *TreeNode) int {
    var ans=10001;
    var temp=-1;
    track :=func(node *TreeNode){}
    track =func(n *TreeNode){
        if n == nil {
            return;
        }
        track(n.Left);
        if temp != -1 {
            if (n.Val-temp)<ans {
                ans=n.Val-temp;
            }
        }
        temp=n.Val;
        track(n.Right);
    }
    track(root);
    return ans;
}
