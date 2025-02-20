class Solution {
public:
    int findMin(vector<int>& nums) {
        int n = nums.size();
        int result = nums[0];

        int left = 0, right = n - 1;

        while (left <= right) {
            if (nums[left] < nums[right]) {
                result = min(result, nums[left]);
            }

            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[left]) {
                result = min(result, nums[mid]);
            }

            if(nums[mid]>= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
};
