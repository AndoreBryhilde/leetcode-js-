Alice and Bob take turns playing a game, with Alice starting first.
Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:
Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.
Return true if and only if Alice wins the game, assuming both players play optimally.

Example 1:
Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:
Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
 
Constraints:
1 <= n <= 1000

/*
給數字n，每次選一個x(0<x<n且n%x=0)，然後 n=n-x。
進行t次，t需要為奇數。
解法為最後的數字不能為1，因為 0<1，但n並沒有大於1。
則n必定需要為偶數
odd=odd*odd
even=even*even or even*odd
則當由一方選擇時，選到odd的人只能輸出even
而選擇even的人可以選擇輸出odd或even
那麼倒數第二個人必須要得到even
也就是一開始就需要拿到even，這樣才能控制局面不會得到odd，或是像以下
A->B->A->B->A->B
8->7->6->3->2->1
*/
var divisorGame = function(n) {
    return !(n%2);
};
