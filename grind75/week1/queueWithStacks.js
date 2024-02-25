var MyQueue = function() {
    // One stack contains new values, one stack contains old values
    this.newStack = [];
    this.oldStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) { 
    this.newStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.oldStack.length === 0) {
        fillOld(this.newStack, this.oldStack);
    }
    return this.oldStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.oldStack.length === 0) {
        fillOld(this.newStack, this.oldStack);
    }
    return this.oldStack[this.oldStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.oldStack.length === 0 && this.newStack.length === 0) {
        return true
    } else {
        return false
    }
};

const fillOld = (s1, s2) => {
    while (s1.length !== 0) {
        s2.push(s1.pop());
    }
    // If s2 pushes in the pops, order should automatically be reversed on population
}