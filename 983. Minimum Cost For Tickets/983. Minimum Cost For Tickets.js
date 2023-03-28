var mincostTickets = function(days, costs) {
    let n=days.length;
    let dp=Array(n+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=n;i++){
        dp[i]=Math.min(dp[i],dp[i-1]+costs[0]);
        for(let j=1;j<=i;j++){
            if(days[j-1]+7>days[i-1]){
                dp[i]=Math.min(dp[i],dp[j-1]+costs[1]);
            }
            if(days[j-1]+30>days[i-1]){
                dp[i]=Math.min(dp[i],dp[j-1]+costs[2]);
            }
        }
    }
    return dp[n];
};

//fast way
var mincostTickets = function(days, costs) {
    const n=days[days.length-1];
    const dp=new Array(n+1).fill(0);
    let i=0;
    for (let day=1;day<= n;day++) {
        if(day===days[i]){
            dp[day]=Math.min(dp[day-1]+costs[0],dp[Math.max(0,day-7)]+costs[1],dp[Math.max(0, day-30)]+costs[2]);
            i++;
        }else{
          dp[day]=dp[day-1];
        }
    }
    return dp[n];
};
