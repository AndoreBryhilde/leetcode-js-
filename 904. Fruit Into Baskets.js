You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

Constraints:
1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(f) {
    let t=new Array(2);t[0]=f[0];t[1]=-1;
    let repeat=0;let tmpLen=1;let max=1;
    for(let i=1;i<f.length;i++){
        if((f[i]==f[i-1])||(t[0]==f[i]||t[1]==f[i])||(t[1]==-1)){
            if(f[i]==f[i-1]){repeat++;}
            if(f[i]!=f[i-1]){repeat=0;if(t[1]==-1){t[1]=f[i];}}
            tmpLen++;
        }else{
            if(tmpLen>=max){max=tmpLen;}
            tmpLen=2+repeat;repeat=0;t[0]=f[i-1];t[1]=f[i];
        }
    }
    if(tmpLen>=max){max=tmpLen;}                 
    return max;
};
//參考網址：https://hackmd.io/@kenjin/BkabttwZS
/*
Greedy 流程
透過 type[2] 去紀錄 bucket 已放置的種類, 透過 repeat 紀錄同一個元素的連續重複數.

初始化第一個元素 type[0] = tree[0], tmpLen = 1, repeat = 0

從第二個元素開始向右數來比較紀錄當前摘取量(tmpLen), 假設當前元素:

等於前一個元素
遞增紀錄摘取量tmpLen, 並遞增 repeat
不等於前一個元素, 但等於第二種類的 bucket
遞增紀錄摘取量tmpLen, 歸零 repeat
不等於前一個元素, 但第二個 bucket 仍為空的
遞增紀錄摘取量tmpLen, 歸零 repeat, 更新第二個 bucket 此元素的 fruit type
當以上條件都不滿足時, 表示我們已無法滿足題目 step1 & step2 而必須 “stop”. 因此判斷是否更新最大摘取量, 並接著進行變數重新初始化(type, repeat, tmpLen)

type[0] 跟 type[1] 分別初始化成當前元素跟前一個元素的 fruit type(因為走到這條件前後兩者一定屬於不同 fruit type)
repeat 設為 0
repeat 在初始化很重要, 我們才可以確定 tmpLen 該初始化為多少

tmpLen = 2 + repeat (當前跟前一個不同的兩元素 “2” 加上前一個元素的重複量)
*/
