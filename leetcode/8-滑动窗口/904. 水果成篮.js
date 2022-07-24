/**
 * @param {number[]} fruits
 * @return {number}
 */
// 思路：用滑动窗口遍历fruits，当有新种类的水果进入窗口时
// 如果窗口中只有一种水果，将这种水果加入arr数组
// 如果有两种水果，更新窗口的左边界，更新arr中水果的种类
// 如果进来了一种新的类型的水果 更新前一种水果的位置
// 更新滑动窗口的最大值
// 复杂度：时间复杂度O(n)，空间复杂度O(1)。
var totalFruit = function (fruits) {
    let l = 0//左边界
    let max = 0
    let n = 0//前一类水果的结束位置
    let wait = [fruits[l]]

    for (let r = 0; r < fruits.length; r++) {
        if (!wait.includes(fruits[r])) {//新水果入队
            if (wait.length == 1) {//一种水果
                wait[1] = fruits[r]
            } else {//两种水果，需要替换掉前一种
                wait[0] = fruits[r - 1]
                wait[1] = fruits[r]
                l = n
            }
        }
        if (fruits[r] !== fruits[n]) {//如果进来了一队新水果，更新前一种水果的位置
            n = r
        }
        max = Math.max(max, r - l + 1)//更新滑动窗口的最大值
    }
    return max
};