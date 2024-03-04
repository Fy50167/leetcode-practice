var invertTree = function(root) {
    const queue = [];

    // Perform depth-first search for values
    const dfs = (root) => {
        if (root === null) return
        queue.push(root.val);
        
        dfs(root.left);
        dfs(root.right);   
    }

    dfs(root);

    // Perform inverted depth-first search to swap values
    const idfs = (root) => {
        if (root == null) return
        root.val = queue.shift();

        idfs(root.right);
        idfs(root.left);
    }   

    idfs(root);

    return root; 
};