/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let t = s.split(' ');
    let pmap ={};
    let smap ={};
    let l = pattern.length;
    if(l != t.length)return false
    for(let i=0;i<l;i++){
        if(!pmap[pattern[i]]){
            pmap[pattern[i]]=t[i]
        }else{
            if(pmap[pattern[i]]!=t[i])return false;
        }
        if(!smap[t[i]]){
            smap[t[i]]=pattern[i]
        }else{
            if(smap[t[i]]!=pattern[i])return false;
        }
    }
    return true;
};
