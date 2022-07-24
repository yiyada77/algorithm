function selectSort(arr) {
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let maxIndex = i
        for (let j = i + 1; j < n; j++) {
            // 降序
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j
            }
        }
        [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
    }
}