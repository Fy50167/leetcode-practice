var coinChange = function(coins, amount) {
    const memo = new Map();
    const output = traversal(coins, amount, memo);
    return output === Infinity ? -1 : output
};

const traversal = (coins, amount, memo) => {
    // Base case: If amount is 0 (found combination that works) return total coints
    if (memo.has(amount)) return memo.get(amount);
    if (amount === 0) return 0
    let lowest = Infinity;

    // Recurse by comparing coin to every other coin value
    for (const coin of coins) {
        if (amount - coin >= 0) lowest = Math.min(lowest, traversal(coins, amount - coin, memo));
    }
    memo.set(amount, lowest + 1);
    return lowest + 1
}