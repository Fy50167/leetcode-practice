/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Generate copy of grid with all values = to 0
    const copy = Array.from({ length: grid.length}, () => new Array(grid[0].length).fill(0));
    let count = 0;

    // Dfs algorithm function
    const dfs = (r, c) => {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        copy[r][c] = 1;

        for (const [dx, dy] of directions) {
            const newRow = r + dx;
            const newColumn = c + dy;

            if (newRow >= 0 && newColumn >= 0 && newRow < grid.length && newColumn < grid[0].length && grid[newRow][newColumn] == 1 && copy[newRow][newColumn] === 0) {
                dfs(newRow, newColumn);
            }
        }
    }

    // Iterate through entire grid and increment count + run dfs whenever grid = 1 and copy = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1 && copy[r][c] === 0) {
                count++
                dfs(r, c);
            }
        }
    }

    return count
};
