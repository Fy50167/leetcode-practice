var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    // Recurse through tree while incrementing diameter
    const findDiameter = (root) => {
        if (root === null) return 0
        
        const leftDepth = findDiameter(root.left);
        const rightDepth = findDiameter(root.right);

        diameter = Math.max(diameter, leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }

    findDiameter(root);

    return diameter
};