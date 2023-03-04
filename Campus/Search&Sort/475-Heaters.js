var findRadius = function (houses, heaters) {
    let res = [];
    houses.sort(function (a, b) {
        return a - b;
    });
    heaters.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < houses.length; i++) {
        let left = 0;
        let right = heaters.length - 1;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (houses[i] > heaters[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (houses[i] === heaters[left]) {
            res.push(0);
        } else if (houses[i] > heaters[left]) {
            res.push(houses[i] - heaters[left]);
        } else if (left > 0) {
            res.push(Math.min(houses[i] - heaters[left - 1], heaters[left] - houses[i]));
        } else {
            res.push(heaters[left] - houses[i]);
        }
    }
    return Math.max.apply(Math, res);
};