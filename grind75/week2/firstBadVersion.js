var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n + 1;

        return binarySearch(left, right, isBadVersion);
    };
};

const binarySearch = (left, right, isBadVersion) => {
    const mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid) === false) {
        return binarySearch(mid + 1, right, isBadVersion)
    } else if (isBadVersion(mid) === true && isBadVersion(mid - 1) !== false) {
        return binarySearch(left, mid - 1, isBadVersion)
    } else if (isBadVersion(mid) === true && isBadVersion(mid - 1) === false) {
        return mid
    }
}