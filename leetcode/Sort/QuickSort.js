/**
 * 1.选择一个基准元素target（一般选择第一个数）
 * 2.将小于target的元素放在数组左边，大于target的数放在数组右边
 * 3.分别对target左右的元素快排
 * 
 * 使用了分治的思想
 */

function quickSort(arr){
    if(arr.length<=1) return arr

    const target=arr[0]
    const left=[]
    const right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=target){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([target],quickSort(right))
}

function quickSort(arr, start, end){
    if(end-start<1) return arr

    let target=arr[start]
    let left=start
    let right=end
    while(left<right){
        while(left<right&&arr[right]>=target){
            right--
        }//跳过大于等于target的值
        arr[left]=arr[right]//此时的right小于target，赋值给left，目前left的值已经保存在target里
        while(left<right&&arr[left]<target){
            left++
        }//跳过小于target的值
        arr[right]=arr[left]//此时的left大于target，赋值给right，该right值已经在上一步保存在起始left里 
    }
    //当循环结束 left=right时，left左边小于target，右边大于等于target，将target放在这个位置
    arr[left]=target
    quickSort(arr,start,left-1)
    quickSort(arr,left+1,end)
    return arr
}