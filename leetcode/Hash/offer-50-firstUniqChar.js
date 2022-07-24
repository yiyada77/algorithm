/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], -1)
        } else {
            map.set(s[i], 1)
        }
    }

    for (let [key, idx] of map) {
        if (idx === 1) {
            return key
        }
    }
    return ' '
};