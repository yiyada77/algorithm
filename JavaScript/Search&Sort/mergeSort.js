function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return mergeHelper(mergeSort(left), mergeSort(right));
}
function mergeHelper(left, right) {
    let res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return res.concat(left).concat(right);
}

let arr = [3, 5, 2, 6, 7, 8, 5, 4, 11, 1];
console.log(mergeSort(arr));