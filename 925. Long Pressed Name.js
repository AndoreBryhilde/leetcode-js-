Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.

Example 2:
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 
Constraints:
1 <= name.length, typed.length <= 1000
name and typed consist of only lowercase English letters.

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let n=0;;let t=0;;
    while(n<name.length||t<typed.length){
        if(name[n]==typed[t]){n++;t++;}
        else if(name[n-1]==typed[t]){t++;}
        else{return false;}
    }
    return true;
};
