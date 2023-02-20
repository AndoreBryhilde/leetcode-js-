You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:
Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.
The test cases are generated so that a unique mapping will always exist.

Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:
Input: s = "1326#"
Output: "acz"
 
Constraints:
1 <= s.length <= 1000
s consists of digits and the '#' letter.
s will be a valid string such that mapping is always possible.

//javascript
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let map={
             '1':'a','2':'b','3':'c','4':'d','5':'e','6':'f','7':'g',
             '8':'h','9':'i','10#':'j','11#':'k','12#':'l','13#':'m',
              '14#':'n','15#':'o','16#':'p','17#':'q','18#':'r','19#':'s',
              '20#':'t','21#':'u','22#':'v','23#':'w','24#':'x','25#':'y',
              '26#':'z',
            }
    let ans='';let i=s.length-1;
    while(i>-1){
        if(s[i]=='#'){
            ans=map[s[i-2]+s[i-1]+s[i]]+ans;
            i-=3;
        }else{
            ans=map[s[i]]+ans;
            i--;
        }
    }
    return ans;
};

//go lang
func freqAlphabets(s string) string {
    res:="";
    for i:=len(s)-1;i>=0;{
        if s[i]=='#' {
            temp:=string(s[i]-2)+string(s[i]-1);
            n,_:=strconv.Atoi(temp);
            res=string('a'+(n-1))+res
            i-=3;
        }else{
            temp:=string(s[i]);
            n,_:=strconv.Atoi(temp);
            res=string('a'+(n-1))+res;
            i--;
        }
    }
    return res;
}
