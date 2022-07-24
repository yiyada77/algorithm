/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 思路：
// 循环nums2，如果循环的元素大于栈顶元素，并且栈不为空，则不断将栈顶元素作为key，当前元素作为value加入map中
// 本质是第一个比栈顶元素大的值会让栈中的元素不断出队 所以这个数就是这些出栈元素的下一个更大的数
// 剩下来的元素就是没有找到最大值的
// 遍历nums1将结果推入ans中
// 复杂度：时间复杂度O(m+n)，nums1、nums2遍历一遍，nums2中的元素入队出队一次。空间复杂度O(n)，栈空间和map的空间的复杂度
var nextGreaterElement = function (nums1, nums2) {
    const map = new Map()
    const stack = []
    nums2.forEach(val => {
        while (stack.length && val > stack[stack.length - 1]) {
            map.set(stack.pop(), val)
        }
        stack.push(val)
    })
    const res = []
    nums1.forEach(val => {
        const bigger = map.has(val) ? map.get(val) : -1
        res.push(bigger)
    })
    return res
};