function mergeSort(arr) {
    const mergeHelper = (left, right) => {
        const res = []
        while (left.length && right.length) {
            if (left[0] > right[0]) {
                res.push(left.shift())
            } else {
                res.push(right.shift())
            }
        }
        while (left.length) {
            res.push(left.shift())
        }
        while (right.length) {
            res.push(right.shift())
        }
        return res
    }

    const n = arr.length
    if (n < 2) {
        return arr
    }
    const mid = n >> 1
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return mergeHelper(mergeSort(left), mergeSort(right))
}