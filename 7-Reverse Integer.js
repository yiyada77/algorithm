
x = 1534236469;
if (x <= -Math.pow(2, 31) || x >= Math.pow(2, 31) - 1) {
    return 0;
}
neg = false;
if (x < 0) {
    x = -x;
    neg = true;
}
x = String(x);
let array = x.split("");
let n = array.length;
for (let i = 0; i < n / 2; i++) {
    tmp = array[i];
    array[i] = array[n - 1 - i]
    array[n - 1 - i] = tmp;
}
let result = array.join("");

if (neg) {
    result = -result;
}
if (result <= -Math.pow(2, 31) || result >= Math.pow(2, 31) - 1) {
    return 0;
} else {
    return result;
}



