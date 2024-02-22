var maxProfit = function(prices) {
    // Initialize variables for buy and sell
    let buy = prices[0];
    let sell = prices[0];
    let highestProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If new lowest value then we re-initialize while maintaining highest profit
        if (prices[i] < buy) {
            buy = prices[i];
            sell = prices[i];
        } else {
            sell = Math.max(sell, prices[i]);
            highestProfit = Math.max(highestProfit, (sell - buy));
        }
    }

    return highestProfit
};

// Time complexity: O(n);
// Space complexity: O(1);