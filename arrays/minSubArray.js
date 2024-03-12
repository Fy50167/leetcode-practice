var minSubArrayLen = function(target, nums) {
    let length = 0;
    let minLength = Infinity;
    let left = 0;
    let sum = 0;
    let valid = false;

    for (let i = 0; i < nums.length; i++) {
        length++;
        sum += nums[i];
        if (sum >= target) {
            if (valid === false) valid = true;
            while (sum - nums[left] >= target) {
                sum -= nums[left];
                left++;
                length--;
            }
            minLength = Math.min(minLength, length);
        }
    }

    return valid === true ? minLength : 0
};