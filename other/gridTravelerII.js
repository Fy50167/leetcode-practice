var uniquePathsWithObstacles = function(obstacleGrid) {
    // Using a Map object as opposed to a normal object goes from bottom 5% to top 5%. 
    const memo = new Map;
    return findPaths(obstacleGrid, obstacleGrid.length - 1, obstacleGrid[0].length - 1, memo);
};

const findPaths = (matrix, r, c, memo) => {
    // Return memo value if value is recorded
    const key = r + ', ' + c;
    if (memo.has(key)) {
        return memo.get(key)
    }

    if (r === 0 && c === 0) {
        if (matrix[r][c] === 1) {
            return 0
        }
        return 1
    } else if (r < 0 || c < 0 || matrix[r][c] === 1) {
        return 0
    }

    memo.set(key, findPaths(matrix, r - 1, c, memo) + findPaths(matrix, r, c - 1, memo));

    return memo.get(key)
}