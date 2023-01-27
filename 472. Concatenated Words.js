Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

Example 1:
Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

Example 2:
Input: words = ["cat","dog","catdog"]
Output: ["catdog"]
 
Constraints:
1 <= words.length <= 104
1 <= words[i].length <= 30
words[i] consists of only lowercase English letters.
All the strings of words are unique.
1 <= sum(words[i].length) <= 105

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function(words) {
        let set = new Set(words);
        function check(word){
            if(set.has(word)){return true;} 
            for(let i=1;i<=word.length;i++){
                let prefix = word.slice(0,i);
                if(set.has(prefix)){
                    if(check(word.slice(i))){set.add(word);return true;}   
                }
            }
            return false;
        }
        const results=[];
        for(const e of words){
            set.delete(e);
            if(check(e)){results.push(e);}
            set.add(e);
        }
        return results;
};

//faster way
var findAllConcatenatedWordsInADict = function(words) {
    const set = new Set(words)
    const res = new Set()
    const f = (pos, s, count) => {
        if(pos >= s.length){
            if(count >= 2)
                res.add(s)
            return
        }

        for(let i=pos+1; i<=s.length;i++){
            const substr = s.substring(pos, i)
            if(set.has(substr)){
                f(i, s, count+1)
            }
        }
    }

    words.forEach(s => f(0, s, 0))

    return Array.from(res)
};
