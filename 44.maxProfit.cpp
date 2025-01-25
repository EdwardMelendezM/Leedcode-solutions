class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minValue = INT_MAX;
        int maxValue = INT_MIN;

        for (int i = 0; i < prices.size(); i++) {
            if (prices[i] < minValue) {
               minValue = prices[i]; 
            }
            int newValue = prices[i] - minValue;
            if (newValue > maxValue) {
                maxValue = newValue;
            }
        }
        return maxValue;
    }
};
