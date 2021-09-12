const nums = [5, 7, 23];
let rep = {};

for (let i = 0; i < nums.length; i++) {
    if (nums[i] in rep) {
        console.log('true');
    } else {
        rep[nums[i]] = nums[i];
    }
}
console.log('false');