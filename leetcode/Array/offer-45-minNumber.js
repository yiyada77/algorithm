/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
    return quickSort(nums).join('')
};

function quickSort(arr){
    if(arr.length<=1) return arr

    const target=arr[0]
    let small=[]
    let big=[]
    for(let i=1;i<arr.length;i++){
        const a=""+target+arr[i]
        const b=""+arr[i]+target
        if(a>b){
            small.push(arr[i])
        }else{
            big.push(arr[i])
        }
    }
    return quickSort(small).concat([target],quickSort(big))
}