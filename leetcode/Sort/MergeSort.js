/**
 * 采用分治法，将问题分成一些小的问题然后递归求解；
 * 治的阶段则将分的阶段得到的答案合在一起
 * 
 * 分割：
 *
 * 将数组从中点进行分割，分为左、右两个数组
 * 递归分割左、右数组，直到数组长度小于2
 *
 * 归并：
 *
 * 如果需要合并，那么左右两数组已经有序了。
 * 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组  
 * 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp
 */
 var mergeSort = function(arr) {
    if(arr.length<2){
        return arr
    }

    const mid=Math.floor(arr.length/2)
    const front=arr.slice(0,mid)
    const end=arr.slice(mid)
    return merge(mergeSort(front),mergeSort(end))
};

function merge(front,end){
    let temp=[]
    while(front.length&&end.length){
        if(front[0]>end[0]){
            temp.push(end.shift())
        }else{
            temp.push(front.shift())
        }
    }
    while(front.length){
        temp.push(front.shift())
    }
    while(end.length){
        temp.push(end.shift())
    }
    return temp
}