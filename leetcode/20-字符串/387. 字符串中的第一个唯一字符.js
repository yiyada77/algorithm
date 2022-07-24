/**
 * @param {string} s
 * @return {number}
 */

// 哈希
// 时间O(n) 空间O(k)
var firstUniqChar = function (s) {
    let map = {}
    let index = Infinity
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (map[c] && map[c].count) {
            map[c].count++
        } else {
            map[c] = {
                count: 1,
                index: i
            }
        }
    }
    for (const key in map) {
        if (map[key].count === 1) {
            if (map[key].index < index) {
                index = map[key].index
            }
        }
    }
    return index !== Infinity ? index : -1
};

// 