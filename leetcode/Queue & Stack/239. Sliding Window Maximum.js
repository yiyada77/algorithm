/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    const window=[]
    const res=[]
    
    for(let i=0;i<nums.length;i++){
        //保证window内最多为k个元素
        if(i-window[0]>=k){
            window.shift()
        }
        //弹出window尾部比当前元素小的值的idx
        let j=window.length-1
        while(j>=0&&nums[i]>=nums[window[j]]){
            j--
            window.pop()
        }
        window.push(i)
        if(i>=k-1){
            res.push(nums[window[0]])
        }
    }
    return res
};