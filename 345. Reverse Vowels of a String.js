/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let t =s.split('');
    let d=['a','A','e','E','i','I','o','O','u','U'];
    let p=[];
    for(let i=0;i<t.length;i++){
        if(d.includes(t[i])){p.push(i);}
    }
    for(let i=0;i<(p.length>>1);i++){
        let temp=t[p[i]];
        t[p[i]]=t[p[p.length-1-i]];
        t[p[p.length-1-i]]=temp;;
    }
    return t.join('')
};
