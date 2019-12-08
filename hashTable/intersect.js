const nums1 = [1, 2, 3, 4, 0, 3, 4, 2, 6];
const nums2 = [4, 5, 6, 7, 8, 9, 0, 10];
let nums1_hash = {};
const l1 = nums1.length;
const l2 = nums2.length;
let i;
let intersect = [];

for (i = 0; i < l1; i++) {
    if (!(nums1[i] in nums1_hash)) {
        nums1_hash[nums1[i]] = nums1[i];
    }
}
for (i = 0; i < l2; i++) {
    if (nums2[i] in nums1_hash) {
        intersect.push(nums2[i]);
    }
}
console.log(intersect);
