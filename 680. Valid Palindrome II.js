Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 
Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
 
Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l=0;let r=s.length-1;
    function check(l,r){
        while(l<r){if(s[l]!=s[r]){return false;}l++;r--;}return true;
    }
    while(l<r&&s[l]==s[r]){l++;r--;}
    if(check(l+1,r)){return true;}
    if(check(l,r-1)){return true;}
    return false;
};
