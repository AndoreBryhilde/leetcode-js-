var removeElements = function(head, val) {
    if(head==null)return head;
    let link = new ListNode();
    let t = link;
    link.next = head;
    while(head!==null){
        if(head.val != val){
           t = head;
           }else{
            t.next = head.next;
        }
        head = head.next;
    }
    return link.next;
};