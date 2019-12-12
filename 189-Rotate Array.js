function rotate(nums, k) {
    for (let i = 0; i < k; i++) {
        let tmp = nums.pop();
        nums.unshift(tmp);
    }
};