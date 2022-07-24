/**
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 * 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 */
var insertSort = function(nums) {
    if(nums.length<=1){
        return nums
    }
    for(let i=1;i<nums.length;i++){
        let target=i
        for(let j=i-1;j>=0;j--){
            if(nums[j]>nums[target]){
               [nums[j],nums[target]]=[nums[target],nums[j]] 
               target=j
            }else{
                break
            }
        }
    }
    return nums
};