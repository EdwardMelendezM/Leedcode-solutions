class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int index = 0;
        int m = matrix.size(), n = matrix[0].size();
        int lowRow = 0, hightRow = n - 1;

        for (int i = 0; i < m; i++) {
            if (matrix[i][0] <= target && target <= matrix[i][n-1]) {
                while (lowRow <= hightRow) {
                    int mid = lowRow + (hightRow - lowRow) / 2;
                    if (matrix[i][mid] == target) {
                        return true;
                    } else if (matrix[i][mid] > target) {
                        hightRow = mid - 1;
                    } else {
                        lowRow = mid + 1;
                    }
                }
                return false;
            }
        }
        return false;
    }
};
