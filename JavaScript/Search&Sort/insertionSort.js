let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
for (let i = 1; i < arr.length; i++) {
    cur = arr[i];
    let k = i;
    while (k > 0 && cur < arr[k - 1]) {
        arr[k] = arr[k - 1];
        k--;
    }
    arr[k] = cur;
}
console.log(arr);