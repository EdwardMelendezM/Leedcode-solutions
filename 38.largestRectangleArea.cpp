class Solution {

public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        stack<int> positions;
        int maxArea = 0;

        for (int i = 0; i <= n; i++) {
            while (!positions.empty() && ( i==n || heights[i] < heights[positions.top()] )) {
                int height = heights[positions.top()];
                positions.pop();
                int width = positions.empty() ? i : i - positions.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            positions.push(i);
        }

        return maxArea;
    }
};
