var binaryTreePaths = function(root) {
    if(root==null)return '';
    let a = root.val.toString();
    if(root.left==null&&root.right==null)return [a];
    let temp =[];
    const track =(node)=>{
        if(node.left==null&&node.right==null){
            temp.push(node.val+'');
            return
        }
        if(node.left!=null){
            node.left.val = node.val+'->'+node.left.val;
            track(node.left);
        }
        if(node.right!=null){
            node.right.val = node.val+'->'+node.right.val
            track(node.right);
        }
    }
    track(root);
    return temp;
};