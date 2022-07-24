/**
 找规律：

 跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。

 跳四级台阶等于跳三级台阶的跳法+跳二级台阶的跳法。

 明显也符合斐波那契数列的规律

 f(n) = f(n-1) + f(n-2)
*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }

    let pre = 1
    let cur = 2
    let i = 3
    while (i++ <= n) {
        const res = pre + cur
        pre = cur
        cur = res
    }
    return cur
};