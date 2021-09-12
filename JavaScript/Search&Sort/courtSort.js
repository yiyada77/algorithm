let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
}

nums = max - min + 1;
let count = new Array(nums).fill(0);
for (let j = 0; j < arr.length; j++) {
    count[arr[j] - min]++;
}

let index = 0;
for (let k = 0; k < nums; k++) {
    while (count[k] > 0) {
        arr[index] = k + min;
        index++;
        count[k]--;
    }
}
console.log(arr);