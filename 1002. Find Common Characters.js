Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 
Constraints:
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let ans=getmap(words[0]);let res=[];
    for(let i=1;i<words.length;i++){
        let temp=getmap(words[i]);
        for(let e in ans){
            ans[e]=Math.min(ans[e],temp[e]);
        }
    }
    for(let e in ans){
        for(let i=0;i<ans[e];i++){
            res.push(e);
        }
    }
    return res;
};

function getmap(w1){
    let map={};
    for(let e of w1){if(map[e]){map[e]++}else{map[e]=1;}}
    return map;
}

//better way
var commonChars = function(words) {
    let len = words.length;
    let result = [];
    words.sort((a,b) => a.length - b.length);
    
    for(let char of words[0]){
        let count = 1;
        while(count < len && words[count].includes(char)){
            words[count] = words[count].replace(char, "");
            count++;
        }
        if(count == len){
            result.push(char);
        }
    }
    return result;
};
