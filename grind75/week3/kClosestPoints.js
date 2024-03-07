/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = [];
    const output = [];
    for (let i = 0; i < points.length; i++) {
        const distance = euclidean(points[i][0], points[i][1]);
        insertSorted(distances, distance, i)
    }

    console.log(distances)

    for (let i = 0; i < k; i++) {
        output.push(points[distances[i][1]]);
    }

    return output

};

const euclidean = (x1, x2) => {
    return Math.sqrt((x1 * x1) + (x2 * x2));
}

function insertSorted(array, value, i) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid][0] === value) {
            array.splice(mid, 0, [value, i]);
            return;
        } else if (array[mid][0] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    array.splice(low, 0, [value, i]);
}

