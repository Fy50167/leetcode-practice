var isValid = function(s) {
    // Define different parentheses
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    // Initialize stack to keep track of values
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (pairs.hasOwnProperty(s[i])) {
            if (stack[stack.length - 1] === pairs[s[i]]) {
                stack.pop();
            } else {
                return false
            }
        } else {
            stack.push(s[i]);
        }
    }

    if (stack.length > 0) {
        return false
    }

    return true
};