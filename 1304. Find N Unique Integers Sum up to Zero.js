Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:


Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]
 
Constraints:
1 <= n <= 1000

//javascript
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans=[];
    if(n%2){ans=[0];}
    for(let i=0;i<~~(n/2);i++){
        ans.push(i+1);
        ans.unshift((i+1)*-1);        
    }
    return ans;
};

//faster
var sumZero = function(n) {
    let ar=new Array(n);
    for (let i=0;i<n;i++){ar[i]=i*2-n+1;}
    return ar;
}


//go lang
func sumZero(n int) []int {
    res:=make([]int, n);
    for i:=0;i<n;i++ {
        res[i]=i*2-n+1;
    }
    return res;
}
