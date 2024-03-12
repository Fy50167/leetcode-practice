var updateMatrix = function(mat) {
    const queue = [];
    const copy = Array.from({length: mat.length}, () => new Array(mat[0].length).fill(0));

    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c])
            }
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let distance = 1;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            for (const [dy, dx] of directions) {
                const newRow = r + dy;
                const newCol = c + dx;
                if (newRow >= 0
                && newCol >= 0
                && newRow < mat.length
                && newCol < mat[0].length
                && mat[newRow][newCol] === 1
                && copy[newRow][newCol] === 0) {
                    copy[newRow][newCol] = distance;
                    queue.push([newRow, newCol])
                }
            }
        }
        distance++;
    }

    return copy
};
