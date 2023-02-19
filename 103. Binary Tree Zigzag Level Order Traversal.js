Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100


//javascript
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let ltr=true;
    let res=[];
    let q=[];
    q.push(root);
    while (q.length) {
        let len = q.length;let temp=[];
        for (let i=0;i<len;i++){
            let cur = q.shift();
            if(ltr){temp.push(cur.val);}
            else{temp.unshift(cur.val);}
            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
        res.push(temp);
        ltr=!ltr;
    }
    return res;
};

//golang
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
    ans:=[][]int{};
    if root==nil {
       return ans; 
    }
    var q=[]*TreeNode{root};
    var deep=true;
    for len(q)!=0 {
        var temp=[]int{};
        var l=len(q);
        for i:=0;i<l;i++ {
            var e=q[0];
            q=q[1:len(q)];
            if deep {
                temp=append(temp,e.Val);
            }else{
                temp=append([]int{e.Val},temp...);
            }
            if e.Left!=nil {
                q=append(q,e.Left)
            }
            if e.Right!=nil {
                q=append(q,e.Right)
            }
        }
        ans=append(ans,temp);
        deep=!deep;
    }
    return ans
}
