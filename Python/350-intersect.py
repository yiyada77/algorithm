def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
    record = {}
    res = []

    for num in nums1:
        record[num] = 1 + record.get(num, 0)

    for num in nums2:
        if record.get(num, 0) >= 1:
            res.append(num)
            record[num] -= 1

    return res
