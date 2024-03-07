var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map(); 
    const stack = [node];

    const clone = new Node(node.val);
    visited.set(node, clone);

    while (stack.length > 0) {
        const original = stack.pop();
        const cloned = visited.get(original);

        for (let neighbor of original.neighbors) {
            if (!visited.has(neighbor)) {
                const neighborClone = new Node(neighbor.val);
                visited.set(neighbor, neighborClone);
                stack.push(neighbor);
            }
            cloned.neighbors.push(visited.get(neighbor));
        }
    }

    return clone;

};