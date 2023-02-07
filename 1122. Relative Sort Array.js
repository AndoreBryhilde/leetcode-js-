Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Example 2:
Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]

Constraints:
1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b)=>a-b);
    let map={};for(let e of arr1){if(map[e]){map[e]++;}else{map[e]=1;}}
    let ans=[];
    for(let e of arr2){
        if(map[e]){for(let i=0;i<map[e];i++){ans.push(e);}map[e]=0;}
    }
    for(let e in map){if(map[e]){
        for(let i=0;i<map[e];i++){ans.push(e);}
    }}
    return ans;
};
//faster way
var relativeSortArray = function(arr1, arr2) {
    let res=[];let diff=[];
    arr2.map(e=>{for(let val of arr1){if(val==e)res.push(val);}})
    arr1.map(e=>{if(arr2.indexOf(e)<0)diff.push(e)})
    return res.concat(...diff.sort((a,b)=>a-b))
};
