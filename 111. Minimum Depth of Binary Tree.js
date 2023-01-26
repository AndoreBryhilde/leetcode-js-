Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 
Constraints:
The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000

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
var minDepth = function(root) {
    if(!root)return 0;
    if(!root.left)return 1+minDepth(root.right);
    if(!root.right)return 1+minDepth(root.left);
    return 1+Math.min(minDepth(root.right),minDepth(root.left));
};

//faster way
var minDepth = function(root) {
    currentLevel = [];
    stepCounter = 0;
    if (root != null) {
        currentLevel.push(root);
    }

    while (currentLevel.length > 0) {
        let nextLevel = [];
        stepCounter++;
        for (let node of currentLevel) {
            if (node.left == null && node.right == null) {
                return stepCounter;
            }
            if (node.left != null) {
                nextLevel.push(node.left);
            }
            if (node.right != null) {
                nextLevel.push(node.right);
            }
        }
        currentLevel = nextLevel;
    }
    return stepCounter;
};
