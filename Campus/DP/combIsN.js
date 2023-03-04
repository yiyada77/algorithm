// 1.2.4 相加

let nums = [1, 1, 1, 2];
let n = 10;

if (n > 4) {
    for (let i = 4; i < n; i++) {
        nums[i] = nums[i - 4] + nums[i - 3] + nums[i - 1];
    }
} else {
    console.log(nums);
}

console.log(nums);