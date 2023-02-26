Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character
 
Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 
Constraints:
0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let dp=Array(word1.length+1).fill(0).map(_=>Array(word2.length+1));
    for(let r=0;r<=word1.length;r++){
        for(let c=0; c<=word2.length;c++){
            if(r==0){dp[0][c]=c;}
            else if(c==0){dp[r][0]=r;}
            else if(word1[r-1]==word2[c-1]){dp[r][c]=dp[r-1][c-1];}
            else{dp[r][c]=Math.min(dp[r][c-1],dp[r-1][c-1],dp[r-1][c])+1;}
        }
    }
    return dp[word1.length][word2.length];
};
