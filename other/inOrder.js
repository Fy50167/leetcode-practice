// Recursive
var inorderTraversal = function(root) {
    const output = [];
    
    const findValues = (root) => {
        if (root === null) {
            return
        }

        findValues(root.left);

        output.push(root.val);

        findValues(root.right);
    }

    findValues(root);

    return output
};