let acts = [[3, 5], [1, 4], [5, 7], [0, 6], [3, 8], [8, 11], [5, 9], [2, 13], [6, 10], [8, 12], [12, 14]];

function activityArrange(acts) {
    let s = acts;
    s.sort(function (a, b) {
        return a[1] - b[1];
    })

    let resActs = [];
    let resTimes = [];

    for (let j = 0; j < s.length; j++) {
        let cur = s[j];
        let res = [];
        res.push(cur);
        for (let i = j + 1; i < s.length; i++) {
            if (s[i][0] >= cur[1]) {
                cur = s[i];
                res.push(cur);
            }
        }
        let time = 0;
        for (let k = 0; k < res.length; k++) {
            time = time + res[k][1] - res[k][0];
        }
        resActs.push(res);
        resTimes.push(time);
    }
    bestOrder = Math.max.apply(Math, resTimes);
    return resActs[resTimes.indexOf(bestOrder)];
}

console.log(activityArrange(acts))