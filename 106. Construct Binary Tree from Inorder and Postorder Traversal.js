Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
Output: [-1]
 
Constraints:
1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree.
//recursive
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length){return null;}
    let node=postorder.pop();
    let pivot =inorder.indexOf(node);
    return {
        val:node,
        left:buildTree(inorder.slice(0,pivot),postorder.slice(0,pivot)),
        right:buildTree(inorder.slice(pivot+1),postorder.slice(pivot))
    };
};

//faster
var buildTree = function(inorder, postorder) {
    let map_inorder = {}
    for (let i=0;i<inorder.length;i++){map_inorder[inorder[i]]=i;}
    function recur(low,high){
        if(low>high){return null;}
        let root=new TreeNode(postorder.pop());
        let mid=map_inorder[root.val];
        root.right=recur(mid+1,high);
        root.left=recur(low,mid-1);
        return root;
    }
    return recur(0,inorder.length-1);
};
