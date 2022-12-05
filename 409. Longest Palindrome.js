Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 
Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let m= new Set();
    let c=0;
    for(let e of s){if(m.has(e)){c+=2;m.delete(e);}else{m.add(e);}}
    return c+(m.size?1:0);
};
//sometimes the down is faster than upper
var longestPalindrome = function(s) {
    let m={};
    let c=0;
    let p=0;
    for(let e of s){
        m[e]=(m[e]||0)+1;
    }
    for(let val in m){
        if(!(m[val]%2)){
            c +=m[val];
        }else{
            p=1;
            c+=m[val]-1;
        }
    }
    return c+(p?1:0);
};
