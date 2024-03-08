var levelOrder = function(root) {
    if (root === null) return [];

    const output = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelNodes = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            levelNodes.push(current.val);
        }
        output.push(levelNodes);
    }

    return output
};