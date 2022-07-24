/**
 * @param {string} s
 * @return {string[]}
 */

// BFS 第一个出现解得层，即为最短删除括号所形成的的合法字符串。
// 时间O(n*2^n) 其中 n 为字符串的长度。考虑到一个字符串最多可能有 2^n 个子序列;
var removeInvalidParentheses = function (s) {
    let res = []
    let currSet = new Set()
    currSet.add(s)

    while (true) {
        for (const str of currSet) {
            if (isValid(str)) { // 每一层的去重子串存在 currSet
                res.push(str)
            }
        }
        if (res.length > 0) { // 首先出现的合法子串的层被返回
            return res
        }
        // 当前层不存在，则对子串进行一个字符的删除
        const nextSet = new Set()
        for (const str of currSet) {
            for (let i = 0; i < str.length; i++) {
                // 对出现括号的地方进行删除，存入 nextSet
                if (str[i] === "(" || str[i] === ')') {
                    nextSet.add(str.slice(0, i) + str.slice(i + 1))
                }
            }
        }
        currSet = nextSet
    }
};

function isValid(s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++
        } else if (s[i] === ')') {
            if (count) {
                count--
            } else {
                return false
            }
        }
    }

    return count === 0
}