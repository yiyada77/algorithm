var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let res = [];
    const flg = strs[0];
    for (let i = 0; i < flg.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j][i] || flg[i] !== strs[j][i]) {
                return plugIn(res);
            }
        }
        res.push(flg[i]);
    }
    return plugIn(res);
};

function plugIn(res) {
    if (res.length === 0) {
        return '';
    } else {
        let str = res.join('');
        return str;
    }
}
const strs=["flower","flow","flight"];
console.log(longestCommonPrefix(strs));
