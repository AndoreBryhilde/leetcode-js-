Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

Constraints:
1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length<p.length){return [];}
    let ans=[];let l=0;let map=new Array(26).fill(0);
    for(let i in p){map[p.charCodeAt(i)-97]++;}
    while(l<=s.length-p.length){
        let arr=[...map];
        for(let i=l;i<p.length+l;i++){
            let pos=s.charCodeAt(i)-97;
            if(arr[pos]==0){break;}else{arr[pos]--;}
            if(i==p.length+l-1){ans.push(l);}  
        }
        l++;
    }
    return ans;
};

//faster way
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const ans = [];
    const letters = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        letters[p.codePointAt(i) - 97] += 1;
    }
    for (let i = -1, j = 0; j < s.length; j++) {
        if (letters[s.codePointAt(j) - 97] - 1 < 0) {
            while (s[++i] !== s[j]) {
                letters[s.codePointAt(i) - 97] += 1;
            }
        } else {
            letters[s.codePointAt(j) - 97] -= 1;
        }
        if (j - i === p.length) {
            ans.push(i + 1);
        }
    }
    return ans;
};
