var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    let maxArea = 0;
    while (left !== right) {
        area = ((Math.min(height[left], height[right])) * (right - left));
        maxArea = Math.max(area, maxArea);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return maxArea
};