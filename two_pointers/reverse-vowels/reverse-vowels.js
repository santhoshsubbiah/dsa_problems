class Solution {
    solve(s) {
        if (!s) return "";

        const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
        const str = Array.from(s);
        let left = 0, right = str.length - 1;

        while (left < right) {
            if (!vowels.has(str[left])) {
                left++;
            } else if (!vowels.has(str[right])) {
                right--;
            } else {
                [str[left], str[right]] = [str[right], str[left]];
                left++;
                right--;
            }
        }

        return str.join('');
    }
}

// ✅ Tests
const sol = new Solution();
console.log(sol.solve("hello"));    // "holle"
console.log(sol.solve("leetcode")); // "leotcede"
console.log(sol.solve("Aa"));       // "aA"