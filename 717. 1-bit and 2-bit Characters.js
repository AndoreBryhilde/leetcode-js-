We have two special characters:
The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

Example 1:
Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.

Example 2:
Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.
 
Constraints:
1 <= bits.length <= 1000
bits[i] is either 0 or 1.

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let p=0;
    while(p<bits.length-1){
        if(bits[p]==1){p+=2;}else{p+=1;}
    }
    return bits[p]==0;
};
