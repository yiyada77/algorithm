/**
 * @param {number} target
 * @return {number[][]}
 */
//当子序列的和大于目标值，small向右移动，子序列的和小于目标值，big向右移动
var findContinuousSequence = function (target) {
    let resArr = []
    let child = [1, 2]

    let small = 1
    let big = 2
    let sum = 3
    while (big < sum) {
        if (sum < target) {
            child.push(++big)
            sum += big
        } else if (sum == target) {
            resArr.push(child.slice())
            sum -= child.shift()
            small++
        } else {
            sum -= child.shift()
            small++
        }
    }
    return resArr
};