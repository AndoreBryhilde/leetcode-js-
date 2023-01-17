A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).
You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
Return the minimum number of flips to make s monotone increasing.

Example 1:
Input: s = "00110"
Output: 1
Explanation: We flip the last digit to get 00111.

Example 2:
Input: s = "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.

Example 3:
Input: s = "00011000"
Output: 2
Explanation: We flip to get 00000000.
 
Constraints:
1 <= s.length <= 105
s[i] is either '0' or '1'.

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let ans=Infinity;let l=s.length;
    let count0=new Array(l+1).fill(0);
    let count1=new Array(l+1).fill(0);
    for(let i=1,j=l-1;i<=l,j>=0;i++,j--){
        count0[i]=(count0[i-1])+(s[i-1]=='1'?1:0);
        count1[j]=(count1[j+1])+(s[j]=='0'?1:0);
    }
    for(let i=0;i<=l;i++){
        ans=Math.min(ans,count0[i]+count1[i])
    }
    return ans;
};
