/**
 * @param {number[][]} points
 * @return {number}
 */

// 思路：循环数组，找出与当前元素距离相同的点，记录频次加入map中，最后循环map，从相同距离的数量中选取两个组合出来，加入结果中。
// 从m个元素中选取两个的排列组合数 是m*(m-1)
// 复杂度：时间复杂度O(n^2)，数组遍历两层，空间复杂度O(n)，哈希表的空间
var numberOfBoomerangs = function (points) {
    let count = 0
    points.forEach(a => {
        const map = new Map()
        points.forEach(b => { // 循环数组，找出与当前元素距离相同的点，记录频次加入map中
            const dis = (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
            map.set(dis, (map.get(dis) || 0) + 1)
        })
        for (let num of map.values()) {
            count += num * (num - 1) // 从相同距离的数量中选取两个组合出来，从m个元素中选取两个的排列组合数 是m*(m-1)
        }
    })
    return count
};