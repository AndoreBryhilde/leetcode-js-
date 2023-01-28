Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.
Implement the SummaryRanges class:
SummaryRanges() Initializes the object with an empty stream.
void addNum(int value) Adds the integer value to the stream.
int[][] getIntervals() Returns a summary of the integers in the stream currently as a list of disjoint intervals [starti, endi]. The answer should be sorted by starti.
 
Example 1:

Input
["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
Output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

Explanation
SummaryRanges summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // return [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]
 
Constraints:
0 <= value <= 104
At most 3 * 104 calls will be made to addNum and getIntervals.
 
/*
把一個數插入到間隔中，如果這個數與某個區間的首（或尾）差1，那麼這個間隔就應當被擴大。
如對於已經存在的間隔如[[1,3],[6,9]],向裡面插入 4，由於 4 和 第一個間隔的末尾 3 相差 1，於是第一個間隔被擴大，結果為[[1,4],[6,9]]。
對於間隔 [[1,4],[6,9]]，向裡面插入 5 ，由於 5 和第一個間隔末尾相差1，與 第二個間隔的頭部相差1，於是 5 把這兩個間隔連在了一起，結果為 [[1,9]]。
用 added 存儲已經用過形成間隔的數字，num_bisect 存儲下一次需要用於形成間隔的數字，invs 存儲所有的間隔。
我們要做的就是依次將 num_bisect 中的數字 num 添加到間隔中，則有如下情況：
1. 如果 num 已經出現在了 added 中，說名此數已經形成了間隔，繼續下一個循環；
2. 如果 num 比間隔 i 的右邊界大 1，如下圖 1，那麼間隔 i 需要擴大右邊界，如果此時剛好 num 比 間隔 i+1 的左邊界小 1，那麼需要將 間隔 i 和 i+1 合併。
*/

var SummaryRanges = function() {
    this.arr=[];
};

/** 
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
   let check=true;
   for(let i=0;i<this.arr.length;i++){
       let [x,y]=this.arr[i];
       if(x<=value&&value<=y){check=false;break;}
       else if(value==y+1){
           this.arr[i][1]=value;
           if(value+1==this.arr[i+1]?.[0]){
               this.arr[i][1]=this.arr[i+1][1];
               this.arr[i][1]=this.arr[i+1][1]
               this.arr.splice(i+1,1)
            }
           check=false;break;
       }
       else if(value<x){
           if(value+1==x){this.arr[i][0]=value;}
           else this.arr.splice(i,0,[value,value])
           check=false;break;
       }
   }
   if(check){this.arr.push([value,value])};
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    return this.arr;
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
