let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
        if (arr[j] < arr[j - 1]) {
            const tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
        }
    }
}
console.log(arr);