/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[\W|_]/g, "").toLowerCase()
  // \W	匹配任意不是字母，数字，下划线，汉字的字符
  // |	指明两项之间的一个选择。用于排除下划线，汉字不属于 ASCII 字符
  // 这样就只剩字母和数字
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false
    }
  }
  return true
};