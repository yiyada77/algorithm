/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const jewelsSet = new Set([...jewels])

    let count = 0
    for (let j of stones) {
        if (jewelsSet.has(j)) {
            count++
        }
    }
    return count
};