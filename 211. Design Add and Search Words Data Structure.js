Design a data structure that supports adding new words and finding if a string matches any previously added string.
Implement the WordDictionary class:
WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 
Example:
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 
Constraints:
1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 3 dots in word for search queries.
At most 104 calls will be made to addWord and search.

var WordDictionary = function() {
    this.map={};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root=this.map;
    for(let e of word){
        if(!root[e]){root[e]={};}
        root=root[e];
    }
    root.isEnd=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word,0,this.map)
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if(index==word.length){return node.isEnd==true;}
    if(word[index]=='.'){
        for(let key in node){
            if(this.dfs(word,index+1,node[key])){return true;}
        }
    }else{
        if (node[word[index]]){
            return this.dfs(word,index+1,node[word[index]]);
        }
    }
    return false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

//faster way
class WordDictionary {
    constructor(){this.dictionary = new Set();};
    addWord(word){this.dictionary.add(word);};
    search(word) {
        if(word.indexOf('.')===-1){
            if(this.dictionary.has(word)){return true;}
            else{return false;}  
        }
        checkWords:for(const currWord of this.dictionary){
            if(word.length!== currWord.length) continue;
            for(let i = 0; word.length > i; i++) {
                if(word[i] !== currWord[i] && word[i] !== '.') continue checkWords;
            };
            return true;
        }
        return false;
    }
};
