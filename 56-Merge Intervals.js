/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => (a[0] - b[0]));//升序排序

    const len = intervals.length;
    if (len < 1) return [];

    let res = [];
    let i = 0;
    while (i < len) {
        const curLeft = intervals[i][0];
        let curRight = intervals[i][1];

        while (i < len - 1 && curRight >= intervals[i + 1][0]) {
            i++;
            curRight = Math.max(intervals[i][1], curRight);
        }
        i++;
        res.push([curLeft, curRight]);
    }
    return res;
};