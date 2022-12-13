Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
If the tree has more than one mode, return them in any order.
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example 1:
Input: root = [1,null,2,2]
Output: [2]

Example 2:
Input: root = [0]
Output: [0]
 
Constraints:
The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

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
 * @return {number[]}
 */
var findMode = function(root){
    let a=[];
    let max=1;
    let c=0;
    let pre=root.val;
    function track(node){
        if(!node)return;
        track(node.left);
        if(node.val==pre){c++}else{c=1;}
        if(c==max){a.push(node.val);}
        if(c>max){a=[];a.push(node.val);max=c;}
        pre=node.val;
        track(node.right);
    }
    track(root);
    return a;
};
