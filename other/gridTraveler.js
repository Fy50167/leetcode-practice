var uniquePaths = function(m, n) {
    const memo = {};
    return findPaths(m, n, memo);
};

const findPaths = (m, n, memo, count) => {
    // When to return
    const key = m + ', ' + n;
    if (memo[key]) {
        return memo[key]
    }
    if (m === 0 || n === 0) {
        return 0
    } else if (m === 1 || n === 1) {
        return 1
    }

    const paths = findPaths(m - 1, n, memo) + findPaths(m, n - 1, memo);

    memo[key] = paths;

    return memo[key]
}