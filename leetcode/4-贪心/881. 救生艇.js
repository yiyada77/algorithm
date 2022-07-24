/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

// 思路：题意是一条船只能坐2人，要求尽可能的用少的船装下这些人。
// 所以可以用贪心策略。让更多的人组成2人组，而且这些2人组的两人重量加起来不超过船的载重。
// 所以可以先排序people，用双指针从两边向中间遍历，让重的人和轻的人组成2人组，
// 如果当前最重的人和最轻的人的重量和超过了载重，那只能让重的人先乘一条船。
// 时间O(nlogn) 空间O(logn) 排序的复杂度>算法的复杂度
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let count = 0
    let light = 0
    let heavy = people.length - 1
    while (light <= heavy) {
        if (people[light] + people[heavy] <= limit) {
            light++
        }
        count++
        heavy--
    }
    return count
};