You are given an integer array deck where deck[i] represents the number written on the ith card.

Partition the cards into one or more groups such that:

Each group has exactly x cards where x > 1, and
All the cards in one group have the same integer written on them.
Return true if such partition is possible, or false otherwise.

 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.
 

Constraints:

1 <= deck.length <= 104
0 <= deck[i] < 104
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let map=[];
    function gcd(x,y){while(y){let t=y;y=x%y;x=t;}return x;}
    for(let e of deck){
        if(map[e]){map[e]+=1;}else{map[e]=1;}
    }
    map=map.filter(e=>e>0);
    let gcdn=map[0]
    for(let i=1;i<map.length;i++){
        let temp=map[i];
        gcdn=gcd(gcdn,temp)
    }
    return gcdn>1;
};
