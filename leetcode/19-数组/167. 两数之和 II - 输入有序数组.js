/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 时间O(n) 空间O(1)
var twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) { // left===right 结束条件 
        const sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
};