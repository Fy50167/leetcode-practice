var twoSum = function(nums, target) {
    // Initialize hash table
    const hashTable = {};

    // Check if partner exists in table
    for (let i = 0; i < nums.length; i++) {
        const partner = target - nums[i];
        if (hashTable.hasOwnProperty([nums[i]])) {
            return [hashTable[nums[i]], i]
        } else {
            hashTable[partner] = i;
        }
    }
};

// Time complexity: O(n);
// Space complexity: O(n);