def merge(self, intervals: List[List[int]]) -> List[List[int]]:
    for i in range(len(intervals) - 1):
        for j in range(len(intervals) - i - 1):
            if intervals[j][0] > intervals[j + 1][0]:
                intervals[j], intervals[j + 1] = intervals[j + 1], intervals[j]

    res = []
    start, end = intervals[0]
    for i in intervals:
        if i[0] > end:
            res.append([start, end])
            start = i[0]
        end = max(end, i[1])
    res.append([start, end])

    return res
