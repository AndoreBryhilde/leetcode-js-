Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
 
Constraints:
1 <= text.length <= 104
text consists of lower case English letters only.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map={};
    for(let e of text){map[e]=0;}for(let e of text){map[e]++;}
    let ans=[map['b'],map['a'],map['l']/2,map['o']/2,map['n']];
    return ~~(Math.min(...ans));
};
