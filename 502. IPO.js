Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.
Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.
Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.
The answer is guaranteed to fit in a 32-bit signed integer.

Example 1:
Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

Example 2:
Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6

Constraints:
1 <= k <= 105
0 <= w <= 109
n == profits.length
n == capital.length
1 <= n <= 105
0 <= profits[i] <= 104
0 <= capital[i] <= 109

//k int 最多可達成任務數量
//w int 可花費cost
//profits []int 任務報酬get
//capital []int 任務需求cost

/*
w>任務需求最大 直接依報酬高低從高到低取得可達成數量之報酬
w<任務需求最大
尋找可完成任務最高報酬，將報酬加入w，報酬欄位歸0，需求設為無限大(不會在被選中)
重複上述步驟直到滿足k的數量
*/

//javascript
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let currCapital=w;
    if(currCapital>=Math.max(...capital)){
        profits.sort((a,b)=>(b-a));
        return profits.slice(0,k).reduce(((a,b)=>(a+b)),w);
    }
    function getBestProject(currCapital){
        let maxProfitProject=0;
        let maxProfitProjectIdx=-1;
        for(let i=0;i<profits.length;i++){
            if(capital[i]<=currCapital){
                if(maxProfitProject<profits[i]){
                    maxProfitProject=profits[i];
                    maxProfitProjectIdx=i;
                }
            }
        }
        return [maxProfitProject,maxProfitProjectIdx];
    }
    for(let j=0;j<k&&j<profits.length;j++){
        const [profit,projectIdx]=getBestProject(currCapital);
        if(projectIdx===-1){return currCapital;}
        profits[projectIdx]=0;
        capital[projectIdx]=Infinity;
        currCapital+=profit;
    }
    return currCapital;
};


