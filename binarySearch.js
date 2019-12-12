function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (right >= left) {
        mid = left + (right - left) / 2;
        if (arr[mid] > num) {
            right = mid - 1;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}