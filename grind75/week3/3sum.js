var threeSum = function(nums) {
    // Sort array
    nums.sort((a, b) => a - b);

    // Define output to return at end
    const output = [];

    // Iterate through nums until nums.length - 2, define left pointer at i + 1, right pointer at length - 1
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] < 0) {
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else {
                output.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            }
        }
        while (nums[i + 1] === nums[i]) {
            i++;
        }
    }

    return output
};