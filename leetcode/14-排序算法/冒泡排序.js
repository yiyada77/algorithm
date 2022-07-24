function bubbleSort(arr) {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // 降序
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}