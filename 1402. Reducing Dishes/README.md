A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.  
Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].  
Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation.  
Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.  

##### Example 1:  
Input: satisfaction = [-1,-8,0,5,-9]  
Output: 14  
Explanation: After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).  
Each dish is prepared in one unit of time.  

##### Example 2:  
Input: satisfaction = [4,3,2]  
Output: 20  
Explanation: Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)  

##### Example 3:  
Input: satisfaction = [-1,-4,-5]  
Output: 0  
Explanation: People do not like the dishes. No dish is prepared.  
 
Constraints:  
n == satisfaction.length  
1 <= n <= 500  
-1000 <= satisfaction[i] <= 1000  

本題提供一個廚師對自己做的菜的滿意度陣列(satisfactions)，而且廚師可以在1個unit內完成一道菜。  
現在有n道菜要做，
現在已知有Like-time coefficient，即每道菜的滿意度會與他的上菜次序成正比(time[i] * satisfactions[i])  
要如何出菜才能達成滿意度最大化？(可忽略某些菜不上)

貪婪法：
首先依照滿意度由小排到大，然後從滿意度最大開始累積。 
temp(額外紀錄用)  
sum(累積的滿意度)  
for(i=satisfactions.length-1;i>=0;i--){
if(satisfactions[i]+sum+temp>sum){
   temp+=satisfactions[i]
   sum+=temp
}
}
