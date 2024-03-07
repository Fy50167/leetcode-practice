var insert = function(intervals, newInterval) {
    // Insert interval
    let index = 0;
    let inserted = false;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > newInterval[0]) {
            inserted = true;
            intervals.splice(i, 0, newInterval);
            break
        }
        index++;
    }
    if (inserted === false) {
        intervals.push(newInterval);
    }
    
    const mergeInterval = (interval, nextInterval, i) => {
        if (!nextInterval) {
            return; // Exit if nextInterval is undefined
        }
        if (interval[1] >= nextInterval[0]) {
            // While 1 index of interval is greater than or equal to 0 index of next interval, merge
            interval[1] = Math.max(interval[1], nextInterval[1]);
            // Remove 1 value from array at position i + 1
            intervals.splice(i, 1);
            mergeInterval(interval, intervals[i], i);
        }
    }

    console.log(index);

    if (intervals[index] && intervals[index - 1]) {
        mergeInterval(intervals[index - 1], intervals[index], index);
    } 
    if (intervals[index] && intervals[index + 1]) {
        mergeInterval(intervals[index], intervals[index + 1], index + 1)
    }

    return intervals
};

// Optimized solution: Add intervals before insert spot, merge new interval until complete, insert new interval, then insert remaining intervals

var insert = function(intervals, newInterval) {
    const merged = [];
    let i = 0;
    
    // Merge intervals before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        merged.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    merged.push(newInterval);
    
    // Merge intervals after newInterval
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i++;
    }
    
    return merged;
};