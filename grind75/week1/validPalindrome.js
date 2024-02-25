var isPalindrome = function(s) {
    // Set all characters to lowercase and remove non-alphanumeric character
    s = s.toLowerCase();

    // Regex for non-alphanumeric characters: /[^a-z0-9]/g
    s = s.replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }

    return true
};