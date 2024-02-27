var climbStairs = function(n) {
    if (n === 1) {
        return n
    }

    // Array to contain memoized previous values
    const dp = [];

    dp[1] = 1;
    dp[2] = 2;

    // Calculate final value based on previous 2 values
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]
};
