The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
 
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"
 
Constraints:
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(!s){return "";}if(numRows==1){return s;} 
    let n=numRows*2-2;
    let arr= Array(numRows).fill("");
    for(let i in s){
        let p=i%n;if(p<numRows){arr[p]+=s[i];}else{arr[n-p]+=s[i];}     
    }
    return arr.join("");
};

//a way to calculate the next alphabeta
var convert = function(s, numRows) {
    if(numRows===1||numRows>=s.length){return s;}
    let result="";let cycle=2*(numRows-1);
    for (let i=0;i<numRows;i++){
        for(let j=0;j+i< s.length;j+=cycle){
            result+=s[j+i];
            if(i&&i!==numRows-1&&j+cycle-i<s.length){result+=s[j+cycle-i];} 
        }
    }
    return result;
}
