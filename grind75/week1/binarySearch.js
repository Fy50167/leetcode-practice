/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    // Call recursion
    return binarySearch(nums, low, high, target)

};

// Binary search function
const binarySearch = (nums, left, right, target) => {
    // Define midpoint with search conditions based on midpoint value
    const mid = Math.floor((left + right) / 2);
    
    if (left > right) {
        return -1
    } else if (target === nums[mid]) {
        return mid
    } else if (target > nums[mid]) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }

    return binarySearch(nums, left, right, target);
}