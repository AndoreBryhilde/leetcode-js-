For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""
 
Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let d=gcd(str1.length,str2.length);
    let ans='';
    for(let i=1;i<=d;i++){
        if(str1.length%i==0&&str2.length%i==0){
            let temp=str1.substring(0,i);
            if(check(str1,temp)&&check(str2,temp)){ans=temp;}
        }
    }
    return ans;
};
function gcd(a,b){
    let d=0;
    for(let i=1;i<=a&&i<=b;i++){if(a%i==0&&b%i==0){d=i;}}
    return d;
}
function check(str,sub){
    return !str.replace(new RegExp(sub,'g'),'').length;
}
