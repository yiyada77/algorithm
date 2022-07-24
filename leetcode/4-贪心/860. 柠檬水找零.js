/**
 * @param {number[]} bills
 * @return {boolean}
 */

// 思路：优先找面额大的
// 复杂度：时间复杂度O(n)，空间复杂度O(1)
var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0
    for (const bill of bills) {
        if (bill == 5) {//面值为5 直接可以兑换柠檬水
            five++
        } else if (bill == 10) {//面值为10 兑换柠檬水 还需要找5元
            if (five == 0) {
                return false
            }
            five--
            ten++
        } else {//面值为20 兑换柠檬水 需要找3个5元或一个10元一个5元
            if (ten > 0 && five > 0) {
                ten--
                five--
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};