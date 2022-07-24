function insertSort(arr) {
    const n = arr.length
    let preIndex, cur
    for (let i = 1; i < n; i++) {
        preIndex = i - 1
        cur = arr[i]
        // 降序
        while (preIndex >= 0 && arr[preIndex] < cur) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = cur
    }
}