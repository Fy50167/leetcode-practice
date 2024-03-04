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


// Iterative
var inorderTraversal = function(root) {

    const stack = [];
    const output = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        console.log(current);
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        output.push(current.val);

        current = current.right;

    }

    return output
};