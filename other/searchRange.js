var searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1]
    }

    // Define low and high;
    let low = 0;
    let high = nums.length - 1;

    // Perform binary search to find one instance of target
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        // Find left and right when target is found

        if (nums[mid] === target) {
            low = mid;
            high = mid;

            while (nums[low - 1] === nums[mid]) {
                low--;
            }

            while (nums[high + 1] === nums[mid]) {
                high++;
            }

            return [low, high]
        }
        
        
        // Halve array size for search
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        
        // Target does not exist
        if (low > high) {
            return [-1, -1]
        }
    }
};