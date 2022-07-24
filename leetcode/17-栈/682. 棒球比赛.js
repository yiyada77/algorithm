/**
 * @param {string[]} ops
 * @return {number}
 */

/**
 * 使用变长数组对栈进行模拟。
 * 如果操作是 +，那么访问数组的后两个得分，将两个得分之和加到总得分，并且将两个得分之和入栈。
 * 如果操作是 D，那么访问数组的最后一个得分，将得分乘以 2 加到总得分，并且将得分乘以 2 入栈。
 * 如果操作是 C，那么访问数组的最后一个得分，将总得分减去该得分，并且将该得分出栈。
 * 如果操作是整数，那么将该整数加到总得分，并且将该整数入栈。
 */
// 时间O(n) 空间O(n)
var calPoints = function (ops) {
    const res = []
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case '+':
                res.push(res[res.length - 1] + res[res.length - 2])
                break
            case 'D':
                res.push(res[res.length - 1] * 2)
                break
            case 'C':
                res.pop()
                break
            default:
                res.push(parseInt(ops[i]))
        }
    }
    return res.reduce((i, j) => i + j, 0)
};