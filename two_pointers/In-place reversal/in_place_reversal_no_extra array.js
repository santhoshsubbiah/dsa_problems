class Solution {
    solve(nums) {
        if (!nums?.length) {
            return [];
        }

        let left = 0, right = nums.length - 1, temp = 0;

        while (left < right) {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
        return nums;
    }
}