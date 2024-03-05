var lowestCommonAncestor = function(root, p, q) {

    // Find the routes to the two targets
    const dfs = (root, target, parents = []) => {
        if (root === null) return [];

        const newPath = parents.concat(root);

        if (root === target) return newPath;

        const leftPath = dfs(root.left, target, newPath);
        if (leftPath.length > 0) return leftPath;

        const rightPath = dfs(root.right, target, newPath);
        return rightPath; 
    };

    const stackP = dfs(root, p);
    const stackQ = dfs(root, q);

    // Trim larger route
    while (stackP.length !== stackQ.length) {
        stackP.length > stackQ.length ? stackP.pop() : stackQ.pop();
    }


    while (stackP.length !== 0) {
        if (stackP[stackP.length - 1] === stackQ[stackQ.length - 1]) {
            return stackP[stackP.length - 1]
        }
        stackP.pop();
        stackQ.pop();
    }

    return false
};