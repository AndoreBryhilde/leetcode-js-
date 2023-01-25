You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.
The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from i, then edges[i] == -1.
You are also given two integers node1 and node2.
Return the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized. If there are multiple answers, return the node with the smallest index, and if no possible answer exists, return -1.
Note that edges may contain cycles.

Example 1:
Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
Output: 2
Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.

Example 2:
Input: edges = [1,2,-1], node1 = 0, node2 = 2
Output: 2
Explanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
The maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2.
 
Constraints:
n == edges.length
2 <= n <= 105
-1 <= edges[i] < n
edges[i] != i
0 <= node1, node2 < n

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    function bfs(node){
        let queue = [node];
        let dist=new Array(edges.length).fill(Infinity);
        dist[node]=0;
        let visited=new Set([node]);
        while (queue.length){
            for(let i=0;i<queue.length;i++){
                let curr = queue.shift();
                let next =edges[curr];
                if(visited.has(next)||next==-1){
                    break;
                }else{
                    dist[next]=dist[curr]+1;
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
        return dist;
    }
    let l1=bfs(node1);
    let l2=bfs(node2);
    let temp=Infinity;let ans=-1;
    for(let i=0;i<edges.length;i++){
        if(Math.max(l1[i],l2[i])<temp){
            temp=Math.max(l1[i],l2[i]);
            ans=i;
        }
    }
    return ans;
};

//better way

function dfs(edges, dist, queue, node) {
    while(node != -1 && queue[node]==-1) {
        queue[node] = dist;
        dist +=1;
        node = edges[node];
    }
    return queue;
}
var closestMeetingNode = function(edges, node1, node2) {
    const q1 = new Array(edges.length).fill(-1);
    const q2 = new Array(edges.length).fill(-1);
    dfs(edges,0,q1,node1);
    dfs(edges,0,q2,node2);
    let minDist = Number.POSITIVE_INFINITY;
    let res=-1;
    for(let i = 0; i < edges.length; i+=1) {
        if(Math.min(q1[i],q2[i])>=0 && Math.max(q1[i],q2[i])<minDist) {
            minDist = Math.max(q1[i], q2[i]);
            res = i;
        }
    }
    return res != -1 ? res : -1; 
};
