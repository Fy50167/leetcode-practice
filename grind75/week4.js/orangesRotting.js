var orangesRotting = function(grid) {
    let minutes = 0;
    let oranges = 0;
    const queue = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                oranges++;
            } 
        }
    }

    while (queue.length > 0 && oranges > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dx, dy] of directions) {
                const newRow = r + dx;
                const newCol = c + dy;

                if (
                    newRow >= 0 &&
                    newRow < grid.length &&
                    newCol >= 0 &&
                    newCol < grid[0].length &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    oranges--;
                }
            }
        }

        minutes++;
    }

    return oranges === 0 ? minutes : -1;
};