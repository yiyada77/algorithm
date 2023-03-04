/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length;
    let i = 0;
    while (len) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
        len--;
    }
    return i;
};