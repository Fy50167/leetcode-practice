var floodFill = function(image, sr, sc, color) {
    // Check if new color and old color are same; return base image if so
    if (color !== image[sr][sc]) {
        paintPixel(image, sr, sc, color, image[sr][sc]);
        return image
    } else {
        return image;
    }
};

// Depth first search function
const paintPixel = (image, r, c, color, start) => {
    if (image[r][c] === start) {
        image[r][c] = color;
        // Check if we can move up a row
        if (r >= 1) {
            paintPixel(image, r - 1, c, color, start);
        } 
        // Check if we can move left a column
        if (c >= 1) {
            paintPixel(image, r, c - 1, color, start);
        }
        // Check if we can move down a row
        if (r + 1 < image.length) {
            paintPixel(image, r + 1, c, color, start);
        } 
        // Check if we can momve right a column
        if (c + 1 < image[0].length) {
            paintPixel(image, r, c + 1, color, start);
        } 
    }
}