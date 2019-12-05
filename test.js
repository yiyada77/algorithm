function test(arr,n){
    if (n===1){
        return arr;
    }
    const left=Math.ceil(n/2);
    const right=n-left;
    const leftRes=test(arr,left);
    const rightRes=test(arr,right);
    return leftRes.concat(rightRes);
}