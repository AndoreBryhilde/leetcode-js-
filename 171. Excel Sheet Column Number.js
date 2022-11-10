var titleToNumber = function(columnTitle) {
    const col = {A:1,B:2,C:3,D:4,E:5,
                 F:6,G:7,H:8,I:9,J:10,
                 K:11,L:12,M:13,N:14,O:15,
                 P:16,Q:17,R:18,S:19,T:20,
                 U:21,V:22,W:23,X:24,Y:25,Z:26}
    let a=0;
    let d = 1;
    /**/
    let l=columnTitle.length-1;
    for(let i=l;i>=0;i--){
        a = a+col[columnTitle[i]]*d;
        d = d*26;
    }
    /**/
    return a;
};

anotherway replace in /**/ /**/

    let c = columnTitle.split('').reverse();
    c.forEach((e,i)=>{a = a+col[e]*d;d = d*26})