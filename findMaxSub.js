s = '1010111110000011111111110';//8

let maximum = local = 0;
let str = s.split('');
for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
        local++;
    } else {
        local = 0;
    }
    maximum = Math.max(maximum, local);
}
console.log(maximum);