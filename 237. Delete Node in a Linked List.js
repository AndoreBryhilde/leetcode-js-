var deleteNode = function(node) {
    node.val = node.next.val;
    while(node.next.next!=null){
        node = node.next;
        node.val = node.next.val;
    }
    node.next = null;
};