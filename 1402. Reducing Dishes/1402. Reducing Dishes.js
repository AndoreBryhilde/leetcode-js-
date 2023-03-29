var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b)=>a-b);
    let l=satisfaction.length;
    let ans=0;
    let sum=0;
    let temp=0;
    for(let i=l-1;i>=0;i--){
        temp+=satisfaction[i];
        sum+=temp;
        ans=Math.max(sum,ans);
        if(ans<0){return 0;}
    }
    return ans;
};
