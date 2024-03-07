var maxSubArray = function(nums) {
    let current = nums[0];
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        current += nums[i];
        if (current < nums[i]) {
            current = nums[i];
        }
        max = Math.max(current, max);
    }

    return max
};