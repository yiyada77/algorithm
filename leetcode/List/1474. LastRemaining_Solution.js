/**
 * 0,1,...,n-1这n个数字排成一个圆圈，
 * 从数字0开始，每次从这个圆圈里删除第m个数字。
 * 求出这个圆圈里剩下的最后一个数字。
*/

function LastRemaining_Solution(n,m){
    if(n<1||m<1) return -1

    const head={val:0}
    let cur=head
    for(let i=1;i<n;i++){
        cur.next={val:i}
        cur=cur.next
    }
    cur.next=head
    while(cur.next!==cur){
        for(let j=0;j<m-1;j++){
            cur=cur.next
        }
        cur.next=cur.next.next
    }
    return cur.val
}