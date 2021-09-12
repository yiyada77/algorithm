var coinChange = function (coins, amount) {
    if (coins.length === 0 || amount === 0) {
        return 0;
    }

    coins.sort(function (a, b) {
        return a - b;
    })

    let nums = 0;
    let rest = amount;
    console.log(coins);
    for (let j = coins.length - 1; j > 0; j--) {
        for (let i = j; i >= 0; i--) {
            if (coins[i] <= rest) {
                let num = parseInt(rest / coins[i]);
                nums = nums + num;
                rest = rest - num * coins[i];
                console.log(num);
                console.log(rest);
            }
        }
        if (rest === 0 && nums > 0) {
            return nums;
        }
    }
    return -1;
};

let coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount));