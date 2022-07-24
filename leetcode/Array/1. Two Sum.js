/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map={}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in map){
            return [i,map[nums[i]]]
        }else{
            map[target-nums[i]]=i
        }
    }
};