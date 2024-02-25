/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Initialize hash tables to keep track of all characters;
    let s1Chars = getCharacters(s);
    let s2Chars = getCharacters(t);

    // Sort keys for equivalence for check
    s1Chars = Object.keys(s1Chars).sort().reduce(
        (obj, key) => { 
            obj[key] = s1Chars[key]; 
            return obj;
        }, 
        {}
    );
    s2Chars = Object.keys(s2Chars).sort().reduce(
        (obj, key) => { 
            obj[key] = s2Chars[key]; 
            return obj;
        }, 
        {}
    );
    
    if (JSON.stringify(s1Chars) === JSON.stringify(s2Chars)) {
        return true
    } else {
        return false
    }

};

// Function to get all characters in string
const getCharacters = (s) => {
    const chars = {};

    for (let i = 0; i < s.length; i++) {
        if (chars[s[i]]) {
            chars[s[i]] += 1;
        } else {
            chars[s[i]] = 1;
        }
    }

    return chars
}