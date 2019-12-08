var numJewelsInStones = function (J, S) {
    let count = 0;
    const sArr = S.split('');
    const jArr = J.split('');
    let i;

    for (i = 0; i < sArr.length; i++) {
        if (jArr.indexOf(sArr[i]) > -1) {
            count = count + 1;
        }
    }
    return count;
};