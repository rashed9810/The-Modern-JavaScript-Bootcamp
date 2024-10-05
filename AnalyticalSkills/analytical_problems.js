// Analytical Skills: Problem-Solving, Logical Reasoning

// Example: Find the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let max = 0, left = 0;

    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        max = Math.max(max, right - left +1);
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
