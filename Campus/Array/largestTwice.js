nums = [123, 32, 12, 3, 22, 54, 6, 7, 8, 45, 99, 100, 400, 876, 80];

let maximum = second = index = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maximum) {
        second = maximum;
        maximum = nums[i];
        index = i;
    } else if (nums[i] > second) {
        second = nums[i];
    }
}
if (maximum > 2 * second) {
    console.log(index);
} else {
    console.log(-1);
}