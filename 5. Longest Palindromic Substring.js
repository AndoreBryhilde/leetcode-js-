Given a string s, return the longest  palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.

/*
find a middle point，then spread to left and right side and check is still palindromic.
mod1: a --> bab -->ababa --> bababab 
mod2: aa --> baab --> abaaba -->  babaabab
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome=function(s){
    let l='';
    var check=function(lp,rp){
        while(lp>=0&&rp<s.length&&s[lp]===s[rp]){lp--;rp++;}
        if(rp-lp>l.length){l=s.slice(lp+1,rp);}
    };
    for (let i=0;i<s.length;i++) {
        check(i,i+1);check(i,i);
        if((s.length-i)*2<l.length){break;}
    }
    return l;
};
