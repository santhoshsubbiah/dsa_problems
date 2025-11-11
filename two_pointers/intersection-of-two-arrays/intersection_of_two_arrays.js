/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */


class Solution {
    solve(nums1, nums2) {

        if (!nums1 || !nums2 || !nums1.length || !nums2.length) {
            return [];
        }

        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        let i = 0, j = 0;
        let result = [];
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] === nums2[j]) {
                if (result.length === 0 || result.at(-1) != nums1[i]) {
                    result.push(nums1[i]);
                }
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++
            } else {
                j++;
            }
        }

        return result;
    }
}

// quick test
const sol = new Solution();
console.log(sol.solve([1, 2, 2, 1], [2, 2]));          // [2]
console.log(sol.solve([4, 9, 5], [9, 4, 9, 8, 4]));      // [4,9]  (order may differ)