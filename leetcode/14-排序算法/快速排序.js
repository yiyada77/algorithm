function quickSort(arr, start, end) {
    if (end - start < 1) return arr

    const target = arr[start]
    let left = start
    let right = end
    while (left < right) {
        while (left < right && arr[right] > target) {
            right--
        }
        // 此时right对应的是一个小于等于target的数
        arr[left] = arr[right]
        while (left < right && arr[left] <= target) {
            left++
        }
        // 此时的left对应的是一个大于target的数
        arr[right] = arr[left]
    }
    arr[left] = target
    quickSort(arr, start, left)
    quickSort(arr, left + 1, end)
    return arr
}