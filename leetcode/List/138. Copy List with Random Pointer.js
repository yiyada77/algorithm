/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(!head) return head
    cloneNode(head)
    cloneRandom(head)
    return reconnectNodes(head)
};

function cloneNode(head){
    let cur=head
    while(cur){
        let cloneNode=new Node(cur.val,cur.next)
        cur.next=cloneNode
        cur=cloneNode.next
    }
}

function cloneRandom(head){
    let cur=head
    while(cur){
        let cloneNode=cur.next
        if(cur.random){
            cloneNode.random=cur.random.next
        }else{
            cloneNode.random=null
        }
        cur=cloneNode.next
    }
}

function reconnectNodes(head){
    const cloneHead=head.next
    let cloneNode=head.next
    let cur=head
    while(cur){
        cur.next=cloneNode.next
        cur=cur.next
        if(cur){
            cloneNode.next=cur.next
            cloneNode=cloneNode.next
        }else{
            cloneNode.next=null
        }
    }
    return cloneHead
}