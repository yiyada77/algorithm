/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// 思路：先排个数最多的任务A，在A的冷却时间内插入其他任务，
// 先计算前max-1行n的间隔的时间大小，time=(max-1)*(n+1)
// 再计算和最大次数相同的字母个数，然后累加进time。
// 最后在tasks的长度和time中取较大的一个
// 时间O(n) 空间O(1)
var leastInterval = function (tasks, n) {
    const map = {}
    for (const task of tasks) {
        if (task in map) {
            map[task]++
        } else {
            map[task] = 1
        }
    }
    let max = 0
    for (const task in map) {
        max = Math.max(max, map[task])
    }
    let time = (max - 1) * (n + 1)
    for (const task in map) {
        if (map[task] == max) {
            time++
        }
    }
    return Math.max(time, tasks.length)
};