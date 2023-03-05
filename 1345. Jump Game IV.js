Given an array of integers arr, you are initially positioned at the first index of the array.
In one step you can jump from index i to index:
i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.
Notice that you can not jump outside of the array at any time.

Example 1:
Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.

Example 2:
Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.

Example 3:
Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
 
Constraints:
1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108

//easy realize
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    if(arr.length==1)return 0;
            let n=arr.length;
        let map = new Map();
        let idx = 0;
        for(let i=0;i<arr.length;i++){
            let num=arr[i];
            if(!map.has(num)){map.set(num,[]);}
            map.get(num).push(i);
        }
        
        let visited=new Array(arr.length).fill(0);
        let q=[];
        q.push(0);
        visited[0]=1;
        let step=0;
        while(q.length){
            let size=q.length;
            for(let i=0;i<size;i++){
                idx=q.shift();
                if(idx==arr.length-1){return step;}
                if(idx-1>=0&&!visited[idx-1]){
                    visited[idx-1]=1;
                    q.push(idx-1);
                }
                if(idx+1<arr.length&&!visited[idx+1]){
                    visited[idx+1]=1;
                    q.push(idx+1);
                }
                for(let next of map.get(arr[idx])){
                    if(!visited[next]){
                        visited[next]=1;
                        q.push(next);
                    }
                }
                while(map.get(arr[idx]).length){map.get(arr[idx]).pop();}
            }
            step++;
        }
        return step;
};

//faster
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    if(arr.length==1){return 0;}
    let groups=new Map();
    for(let i=0;i<arr.length;i++){
        let v=arr[i];let group=groups.get(v);
        if(group){group.push(i);}else{group=[i];groups.set(v,[i]);} 
    }
    let costs=[0];
    let baseCost=0;
    let work=[0];
    let goal=arr.length-1;
    while(work.length){
        let newWork=[];
        let groupCost=baseCost+1;
        for(let i of work){
            let v=arr[i];
            if(v===undefined){continue;}
            arr[i]=undefined;
            let before=i-1;let after=i+1;
            if((before>=0)&&(!costs[before])){
                costs[before]=groupCost;
                newWork.push(before);
            }
            if ((after<=goal)&&(!costs[after])){
                if(after===goal){return groupCost;}
                costs[after]=groupCost;
                newWork.push(after);
            }

            let group=groups.get(v);
            if(!group){continue;}
            groups.delete(v);
            for(let index of group){
                if(index!==i){
                    if(index===goal){return groupCost;}
                    if(!costs[index]){
                        newWork.push(index);
                        costs[index]=groupCost;
                    }
                }
            }
        }
        baseCost=groupCost;
        work=newWork;
    }
    return costs[arr.length-1];
};
