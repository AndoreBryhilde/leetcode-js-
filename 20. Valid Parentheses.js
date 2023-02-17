Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

//javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length==1){return false;}
    const dir={'(':')','{':'}','[':']'};
    const stack=[];
    for(let e of s){
        if(e=='{'||e=='['||e=='('){
            stack.push(e);
        }else{
            if(dir[stack.pop()]!=e){return false;}
        }
    }
    return stack.length==0;
};
//golang
func isValid(s string) bool {
    if len(s)%2!=0 {
        return false;
    }
    st:=[]rune{};
    open:=map[rune]rune{'(':')','[':']','{':'}'};
    for _,r:=range s {
    if closer,ok:=open[r];ok {
      st=append(st,closer);
      continue;
    }
    l:=len(st)-1;
    if l<0||r!=st[l] {
      return false;
    }
    st=st[:l];
  }
  return len(st)==0
}
