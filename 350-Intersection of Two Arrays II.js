var intersect = function (nums1, nums2) {
    let rec = new Map();
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        if (rec.has(nums1[i])) {
            rec.set(nums1[i], rec.get(nums1[i]) + 1);
        } else {
            rec.set(nums1[i], 1);
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (rec.has(nums2[j]) && rec.get(nums2[j]) >= 1) {
            res.push(nums2[j]);
            rec.set(nums2[j], rec.get(nums2[j]) - 1);
        }
    }
    return res;
};