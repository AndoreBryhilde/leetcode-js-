You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return the sum of lengths of all good strings in words.

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 
Constraints:
1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map=getmap(chars);let ans=0;
    outer: for(let e of words){
        if (e.length>chars.length){continue;}
        let emap=getmap(e);
        for(let i=0;i<26;i++){if(map[i]<emap[i]){continue outer;}}
        ans+=e.length;
    }
    return ans;
};
const getmap=(str)=>{
    let map = new Array(26).fill(0);
    for(let e of str){map[e.charCodeAt(0)-97]++;}
    return map;
}
