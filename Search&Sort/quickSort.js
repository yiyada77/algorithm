function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    quickHelper(arr, 0, arr.length - 1);
    return arr;
}
function quickHelper(arr, left, right) {
    if (left + 1 > right) {
        return arr;
    }
    let pivot = arr[left];
    let i = left + 1;
    let j = right;
    while (i <= j) {
        while (i <= j && arr[i] < pivot) {
            i++;
        }
        while (i <= j && arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }
    arr[left] = arr[j];
    arr[j] = pivot;
    quickHelper(arr, left, j - 1);
    quickHelper(arr, i, right);
}

let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
console.log(quickSort(arr));