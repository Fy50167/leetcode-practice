var isBalanced = function(root) {
    const dfs = (root) => {
        if (root === null) return [true, 0]

        const left = dfs(root.left);
        const right = dfs(root.right);

        const balanced = ((Math.abs(left[1] - right[1]) <= 1) && left[0] && right[0])

        return [balanced, 1 + Math.max(left[1], right[1])]
    }

    return dfs(root)[0]
};