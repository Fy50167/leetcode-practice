var maxDepth = function(root) {
    // Define output and comparison

    const dfs = (root) => {
        if (root === null) return 0

        const leftDepth = dfs(root.left);
        const rightDepth = dfs(root.right);

        return Math.max(leftDepth, rightDepth) + 1
    }


    return dfs(root)
};