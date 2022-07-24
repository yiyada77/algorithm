/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
    for(const i of nums){
        if(nums.indexOf(i)===nums.lastIndexOf(i)) return i
    }
    return -1
};