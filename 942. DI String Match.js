A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

Example 1:
Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: s = "III"
Output: [0,1,2,3]

Example 3:
Input: s = "DDI"
Output: [3,2,0,1]
 
Constraints:
1 <= s.length <= 105
s[i] is either 'I' or 'D'.

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let arr=new Array(s.length+1).fill(0).map((e,i)=>i);
    function idsort(a){
        let bool=false;
        for(let i=0;i<s.length;i++){
            if(s[i]=='I'&&a[i]>a[i+1]){
                bool=true;
                let temp=a[i];a[i]=a[i+1];a[i+1]=temp;
            }else if(s[i]=='D'&&a[i]<a[i+1]){
                bool=true;
                let temp=a[i];a[i]=a[i+1];a[i+1]=temp;
            }
        }
        return [bool,a];
    }
    while(true){
        let res=idsort(arr);
        if(res[0]){idsort(res[1]);}
        else{return res[1];}
    }
};

//better way
var diStringMatch = function (s) {
  const len = s.length;
  let ans = [];
  let lower = 0;
  let upper = len;

  for (let i = 0; i < len; i++) {
    if (s[i] === "I") ans[i] = lower++;
    else ans[i] = upper--;
  }
  ans[len] = lower;

  return ans;
};
