Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
(Recall that an integer is prime if and only if it is greater than 1, and cannot be written as a product of two positive integers both smaller than it.)
Since the answer may be large, return the answer modulo 10^9 + 7.

Example 1:
Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.

Example 2:
Input: n = 100
Output: 682289015
 
Constraints:
1 <= n <= 100

/*
把質數和非質數分開排列，比如質數有count個，那其排列的方法總數就是count!，同理，非質數的排列方法就是(n-count)!，然后兩者相乘。
求質數 204. Count Primes.js
*/

var numPrimeArrangements = function(n) {
    let m= 7+10**9;let ans =1;let count=0;
    let prime=new Array(n+1).fill(true);prime[0]=false;prime[1]=false;
    for(let i=2;i*1<=n;i++){
        if(prime[i]){for(let f=2;f*i<=n;f++){prime[f*i]=false;}}
    }
    for(let i=1;i<=n;i++){if(prime[i]){count++;}}
    for(let i=1;i<=count;i++){ans=ans*i%m;}
    for(let i=1;i<=n-count;i++){ans=ans*i%m;}
    return ans;
};
//a faster way but i don't know why.
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
  const primes = countPrimes(n);
  return (factorial(primes) * factorial(n - primes)) % 1000000007n;
};

const factorial = n =>{console.log(1n);
   return n<=1?1n:(BigInt(n)*factorial(n-1))%1000000007n; 
}
  

const countPrimes = function(n) {
  const nums = [...Array(n + 1).keys()].slice(2);
  for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
    if (nums[i]) {
      for (let j = i + nums[i]; j <= n; j += nums[i]) {
        nums[j] = undefined; 
      }
    }
  }
  return nums.filter(n => n).length;
};
