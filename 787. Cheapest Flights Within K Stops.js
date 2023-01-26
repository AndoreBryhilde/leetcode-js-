There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

Example 1:
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

Example 2:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

Example 3:
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
Output: 500
Explanation:
The graph is shown above.
The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 
Constraints:
1 <= n <= 100
0 <= flights.length <= (n * (n - 1) / 2)
flights[i].length == 3
0 <= fromi, toi < n
fromi != toi
1 <= pricei <= 104
There will not be any multiple flights between two cities.
0 <= src, dst, k < n
src != dst
//Bellman–Ford algorithm
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let dp=Array(k+2).fill(0).map(_=>Array(n).fill(Infinity));
    dp[0][src]=0;
    for (let i=1;i<=k+1;i++) {
        dp[i][src] = 0;
        for (let e of flights) {
            dp[i][e[1]]=Math.min(dp[i][e[1]],dp[i-1][e[0]]+e[2]);
        }
    }
    return (dp[k+1][dst]>=Infinity)?-1:dp[k+1][dst];
};

//faster way by new dp
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n).fill(Infinity);
    prices[src] = 0;

    for (let i = 0; i < k + 1; i++) {
      let tmpPrices = prices.slice();
      for (let [s, d, p] of flights) {
        if (prices[s] === Infinity) continue;
        if (prices[s] + p < tmpPrices[d]) {
          tmpPrices[d] = prices[s] + p
        }
      }
      prices = tmpPrices;
    }
    return prices[dst] === Infinity ?  -1 : prices[dst];
};
