Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans='';let t=0;
    let i=a.split('');let j=b.split('');
    while(i.length||j.length){
        let ta=parseInt(i.pop()??0);
        let tb=parseInt(j.pop()??0);
        let sum=ta+tb+t;
        if(sum==3){ans='1'+ans;t=1;}
        else if(sum==2){ans='0'+ans;t=1;}
        else if(sum==1){ans='1'+ans;t=0;}
        else if(sum==0){ans='0'+ans;t=0;}
    }
    if(t==1){ans='1'+ans;}
    return ans;
};

//faster way
var addBinary = function(a, b) {
    return BigInt(BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
