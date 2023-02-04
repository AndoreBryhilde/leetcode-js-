Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 
Constraints:
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length){return false;}
    let l1=new Array(26).fill(0);let l2=new Array(26).fill(0);
    for(let i in s1){l1[s1.charCodeAt(i)-97]++;l2[s2.charCodeAt(i)-97]++;}
    if(check(l1,l2)){return true;}
    for(let i=0;i<s2.length-s1.length;i++){
        l2[s2.charCodeAt(i)-97]--;
        l2[s2.charCodeAt(i+s1.length)-97]++;
        if(check(l1,l2)){return true;}
    }    
    return false
    function check(arr1,arr2){
        for(let i in arr1){if(arr1[i]!=arr2[i]){return false;}}
        return true;
    }
};

//faster way by reduce check
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false

    const count = Array(26).fill(0)
    for (let i=0; i<s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++
        count[s2.charCodeAt(i) - 97]--
    }

    if (count.every(c => c === 0)) return true

    for (let i=s1.length; i<s2.length; i++) {
        count[s2.charCodeAt(i) - 97]--
        count[s2.charCodeAt(i - s1.length) - 97]++

        if (count.every(c => c === 0)) return true
    }   

    return false
};
