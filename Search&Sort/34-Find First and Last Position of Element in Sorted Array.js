var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }
    let res = [];
    //find left pos
    res.push(leftBound(nums, target));
    //find right pos
    res.push(rightBound(nums, target));
    return res;
};

function leftBound(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    if (nums[left] === target) {
        return left;
    } else {
        return -1;
    }
}
function rightBound(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }


    if (left === 0) {
        if (nums[left] === target) {
            return 0;
        } else {
            return -1;
        }
    }
    if (nums[left - 1] === target) {
        return left - 1;
    } else {
        return -1;
    }
}