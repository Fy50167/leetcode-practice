var canConstruct = function(ransomNote, magazine) {
    // Initialize hash table to keep track of magazine characters
    const hashTable = {};

    // Populate table with characters
    for (let i = 0; i < magazine.length; i++) {
        if (!hashTable[magazine[i]]) {
            hashTable[magazine[i]] = 1;
        } else {
            hashTable[magazine[i]] += 1;
        }
    }

    // Check if characters in ransom note exist
    for (let i = 0; i < ransomNote.length; i++) {
        if (hashTable[ransomNote[i]]) {
            hashTable[ransomNote[i]] -= 1;
            if (hashTable[ransomNote[i]] === 0) {
                delete hashTable[ransomNote[i]];
            }
        } else {
            return false
        }
    }

    return true
};