var productExceptSelf = function(nums) {
    if (nums.length === 0) return []
    const answer = [];
    answer[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let current = nums[nums.length - 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        answer[i] *= current;
        current *= nums[i];
    }

    return answer
};