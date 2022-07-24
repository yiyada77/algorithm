/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortedNums = sort(nums)
    let res = []

    for (let i = 0; i < sortedNums.length; i++) {
        // skip duplicate
        if (i && sortedNums[i] === sortedNums[i - 1]) { continue }
        let left = i + 1
        let right = sortedNums.length - 1
        while (left < right) {
            const sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
            if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                res.push([sortedNums[i], sortedNums[left++], sortedNums[right--]])
                // skip duplicate
                while (sortedNums[left] === sortedNums[left - 1]) {
                    left++
                }
                while (sortedNums[right] === sortedNums[right + 1]) {
                    right--
                }
            }
        }
    }
    return res
};

function sort(arr) {
    if (arr.length < 2) return arr
    let left = []
    let right = []

    const target = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < target) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return sort(left).concat([target], sort(right))
}