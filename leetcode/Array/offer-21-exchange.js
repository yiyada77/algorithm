/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function(nums) {
    let even=[]
    let odd=[]
    for(const i of nums){
        if(i%2==0){
            even.push(i)
        }else{
            odd.push(i)
        }
    }
    return odd.concat(even)
};

var exchange = function(nums) {
    let start=0
    let end=nums.length-1
    while(start<end){
        while(nums[start]%2==1){
            start++
        }
        while(nums[end]%2==0){
            end--
        }
        if(start<end){
            const tmp=nums[start]
            nums[start]=nums[end]
            nums[end]=tmp
            start++
            end--
        }
    }
    return nums
};