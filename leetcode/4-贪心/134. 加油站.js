/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// 思路：总油量量小于总花费肯定不能走完
/**
为什么只需要迭代到最后一个数，而不用环绕一周回到起点？
可以用反证法，假设迭代到最后一个数时成功，而在环绕回起点的时候失败
假设此时失败的点为X，从下标0开始到X必定有累计cost > 累计gas
gas ---------X-----------X后第一个正节点----------我们选的节点---------
cost ---------X-----------X后第一个正节点----------我们选的节点---------
四段-----累计值情况 | -a | -b | -c | d
很显然X后第一个正节点要么是我们选的节点，要不到我们选的节点之间累计为负数
无论哪种情况都与假设矛盾
所以只需要迭代到最后一个数就能证明所有情况
*/
// 时间O(n) 空间O(1)
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0
    let totalCost = 0
    const n = gas.length
    for (let i = 0; i < n; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
    }
    if (totalCost > totalGas) return -1

    let start = 0
    let rest = 0
    for (let i = 0; i < n; i++) {
        rest = rest + gas[i] - cost[i]
        if (rest < 0) {
            // 到不了下一站，开始点+1，重新计算
            // 为什么碰到失败情况可以直接从失败后下一个状态开始（而不是开始的后一个状态）？
            // 只有当开始能够获得正值油量，即当gas[i]>cost[i]时开始迭代， 若迭代过程中出现rest<0导致失败
            // 失败原因只能是迭代过程中 累计cost > 累计gas + 开始时的正值
            // 若从开始的后一个状态开始， 则相当于舍弃了开始时的正值
            start = i + 1
            rest = 0
        }
    }
    return start
};