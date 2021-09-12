let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            let tmp = arr[j];
            arr[j] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
}
console.log(arr);