func mincostTickets(days []int, costs []int) int {
    n:=days[len(days)-1]
    dp:=make([]int,n+1)
    i:=0;
    for day:=1;day<=n;day++ {
        if day==days[i] {
            dp[day]=min(min(dp[day-1]+costs[0],dp[normlize(0,day-7)]+costs[1]),dp[normlize(0,day-30)]+costs[2])
            i++
        }else{
          dp[day]=dp[day-1]
        }
    }
    return dp[n]
}
func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}
func normlize(a int,b int) int {
  if b>0 {
      return b;
  }
  return a;
}
