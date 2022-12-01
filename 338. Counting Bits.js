/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n==0)return [0];
    let ans=[0,1];
    if(n==1)return ans;
    let c=0;
    let t=2;
    for(let i=2;i<=n;i++){
        ans.push(ans[c]+1);
        c++;
        if(c==t){
            t=t*2;
            c=0;
        }
    }
    return ans;
};
