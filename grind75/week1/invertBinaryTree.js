var invertTree = function(root) {
    if (!root) return root

    // Perform depth-first search for values
    if (root === null) return
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root; 
};