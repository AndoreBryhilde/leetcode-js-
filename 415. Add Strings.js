Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 
Constraints:
1 <= num1.length, num2.length <= 104
num1 and num2 consist of only digits.
num1 and num2 don't have any leading zeros except for the zero itself.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let l1=num1.length;
    let l2=num2.length;
    let a='';
    let i=0;
    while(l1>0||l2>0){
        let f=l1>0?parseInt(num1[l1-1]):0;
        let b=l2>0?parseInt(num2[l2-1]):0;
        let s=f+b+i;
        a=((s%10))+a;
        i=s>9?1:0;
        l1--;
        l2--;
    }
    return i?'1'+a:a;
};
