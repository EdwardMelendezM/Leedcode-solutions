class Solution {
public:
    int search(vector<int>& nums, int target) {
        int low = 0, hight = nums.size() - 1;

        while (low <= hight) {
            int mid = low + (hight - low) / 2;

            if (nums[mid] == target) {
                return mid;
            }
            else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                hight  = mid - 1;
            }
        }
        return -1;
    }
};
