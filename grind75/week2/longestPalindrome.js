var longestPalindrome = function(s) {
    // Var to check for single odd count
    let odd = 0;

    // Hash table to keep track of character counts
    let hashTable = {};

    // Populate table with character counts
    for (let i = 0; i < s.length; i++) {
        if (hashTable[s[i]]) {
            hashTable[s[i]] += 1;
        } else {
            hashTable[s[i]] = 1;
        }
    }

    // Find max count
    let count = 0; 
    for (const [key, value] of Object.entries(hashTable)) {
        count += Math.floor(value / 2) * 2;
    }

    if (Object.values(hashTable).some(value => value % 2 === 1)) {
        count += 1;
    }

    return count
};