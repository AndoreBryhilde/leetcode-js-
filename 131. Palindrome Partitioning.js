Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]
 
Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let partition=[];let ans=[];
    dfs(s,partition,ans);
    return ans;
};
var dfs = function(s,partition,ans){
    if(!s.length){ans.push([...partition]);return;}
    for(let i=1;i<=s.length;i++){
        let pre=s.substring(0,i);
        let post=s.substring(i);
        if(check(pre)){
            partition.push(pre);
            dfs(post,partition,ans);
            partition.pop();
        }
    }
    return
};
function check(str){
    let s=0;let e=str.length-1;
    while(s<e){if(str[s]!=str[e]){return false;}s++;e--;}
    return true;
}
