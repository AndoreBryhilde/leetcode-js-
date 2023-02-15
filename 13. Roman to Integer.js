Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let stack=s.split('');let ans=0;let temp=0;
    let dir={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    while(stack.length){
        let num=dir[stack.pop()];
        if(num<temp){ans-=num;}else{ans+=num;}
        temp=num;
    }
    return ans;
};

//go lang
func romanToInt(s string) int {
    dir:=map[byte]int{'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    var ans=dir[s[len(s)-1]];
    for i:=len(s)-2;i>=0;i--{
        if(dir[s[i+1]]>dir[s[i]]){
            ans-=dir[s[i]];
        }else{
            ans+=dir[s[i]];
        }
    }
    return ans;
}
//better way
func romanToInt(s string) int {
    roman := map[rune]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    s = strings.Replace(s, "IV", "IIII", -1)
    s = strings.Replace(s, "IX", "VIIII", -1)
    s = strings.Replace(s, "XL", "XXXX", -1)
    s = strings.Replace(s, "XC", "LXXXX", -1)
    s = strings.Replace(s, "CD", "CCCC", -1)
    s = strings.Replace(s, "CM", "DCCCC", -1)

    r := 0
    for _, s := range s {
        r+= roman[s]
    }
    return r
}
