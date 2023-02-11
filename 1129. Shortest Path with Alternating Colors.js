You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
You are given two arrays redEdges and blueEdges where:
redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

Example 1:
Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]

Example 2:
Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]

Constraints:
1 <= n <= 100
0 <= redEdges.length, blueEdges.length <= 400
redEdges[i].length == blueEdges[j].length == 2
0 <= ai, bi, uj, vj < n
/*
給n個點，以及紅藍兩種路徑，詢問是否可以從0到各點依序走紅藍路徑到達，需要幾步？到不了用-1表示。
採bfs法，依序以紅藍路徑圖檢查可抵達的點。
*/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, red_edges, blue_edges) {
  const graph={};const res=Array(n).fill(-1);
  const visited={0:new Set(),1:new Set()};
  const queue=[[0,0],[0,1]];let len=0;
  for (let i=0;i<n;i++){graph[i]={0:[],1:[]};}
  red_edges.forEach(([i,j])=>graph[i][0].push(j));
  blue_edges.forEach(([i,j])=>graph[i][1].push(j));
  while(queue.length){
    const j=queue.length;
    for(let i=0;i<j;i++){
      const [cur,color]=queue.shift();
      if(res[cur]==-1){res[cur]=len;}
      const next=graph[cur][color];
      next.forEach((e)=>{
        if(!visited[1-color].has(e)){
          visited[1-color].add(e);
          queue.push([e,1-color]);
        }
      });
    }
    len++;
  }
  return res;
};
