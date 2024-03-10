var isValidBST = function(root) {
    return validate(root, Infinity, -Infinity);
};

const validate = (root, min, max) => {
    if (!root) return true

    if (root.val >= min || root.val <= max) {
        return false
    }

    return validate(root.left, root.val, max) && validate(root.right, min, root.val)
}