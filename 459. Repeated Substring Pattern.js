Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

Constraints:
1 <= s.length <= 104
s consists of lowercase English letters.
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let l=s.length;
    for(let i=(l>>1);i>0;i--){
        if(!(l%i)){
            let p=i;
            let sub=s.substring(0,p);
            while(s.indexOf(sub,p)==p)p+=i;
            if(p==l)return true;
        }
    }
    return false;
};
