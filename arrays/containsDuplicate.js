var containsDuplicate = function(nums) {
    const hashTable = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (hashTable.has(nums[i])) {
            return true
        }
        hashTable.add(nums[i]);
    }
    return false
};

// Time complexity: O(n):
// Space complexity: O(n);