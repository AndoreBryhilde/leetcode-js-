Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:
Input: n = 0
Output: 0

Example 3:
Input: n = 1
Output: 0

Constraints:
0 <= n <= 5 * 106

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
   if (n < 3) return 0;
   const prime = new Uint8Array(n)
   let ans=1;
   for(let i=3;i<n;i+=2){
       if(!prime[i]){
           ans++;
           for(let j=i*i;j<n;j+=2*i){prime[j]=1;}
    }
   }
   return ans;
};
