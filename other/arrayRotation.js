var rotate = function(nums, k) {
    k = k % nums.length;
    const backHalf = nums.splice(nums.length - k);
    nums.unshift(...backHalf);
};

// Time complexity: O(n);
// Space complexity: O(1);