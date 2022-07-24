/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    createMaxHeap(arr,k)
    for(let i=k;i<arr.length;i++){
        if(arr[i]<arr[0]){
            [arr[0],arr[i]]=[arr[i],arr[0]]
            adjustMaxHeap(0,arr,k)
        }
    }
    return arr.splice(0,k)
};

function createMaxHeap(arr,length){
    for(let i=Math.floor(length/2)-1;i>=0;i--){
        adjustMaxHeap(i,arr,length)
    }
}

function adjustMaxHeap(index,arr,length){
    for(let i=2*index+1;i<length;i=2*i+1){
        if(i+1<length&&arr[i+1]>arr[i]){
            i++
        }
        if(arr[i]>arr[index]){
            [arr[i],arr[index]]=[arr[index],arr[i]]
            index=i
        }else{
            break
        }
    }
}