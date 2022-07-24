/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n<=1){
        return n
    }

    let i=2
    let cur=1
    let pre=0
    while(i++<=n){
        const res=cur+pre
        pre=cur
        cur=res
    }
    return cur
};