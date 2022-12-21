We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.
Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

Example 1:
Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4] and group2 [2,3].

Example 2:
Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false

Example 3:
Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
 
Constraints:
1 <= n <= 2000
0 <= dislikes.length <= 104
dislikes[i].length == 2
1 <= dislikes[i][j] <= n
ai < bi
All the pairs of dislikes are unique.

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph =Array(n);
    for (let [x, y] of dislikes){
        let x1=x-1;let y1 =y-1;
        !graph[x1]?graph[x1]=[y1]:graph[x1].push(y1);
        !graph[y1]?graph[y1]=[x1]:graph[y1].push(x1); 
    }
  let colors = new Array(n);
  for (let i = 0; i < colors.length; i++) {
      if(!colors[i]&&!dfs(i,1)){return false;}
  }
  return true

  function dfs (cur, color) {
    colors[cur] = color
    if(!graph[cur]){return true;}
    for (let item of graph[cur]) {
      if(colors[item]===color){return false;}
      if(!colors[item]&&!dfs(item,-color)){return false;}
    }
    return true
  }
};
