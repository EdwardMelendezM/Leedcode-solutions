class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int low = 1, high = *max_element(piles.begin(), piles.end());
        int n = piles.size();
        int k = 0;

        while (low <= high) {
            int hours = 0;
            k = low + (high - low) / 2;
            for (int i = 0; i < n; i++) {
                hours += (piles[i] + k - 1) / k;
            }

            if (hours <= h) {
                high = k - 1;
            } else {
                low = k + 1;
            }
        }

        return low;
    }
};
